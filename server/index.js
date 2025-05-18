import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Load environment variables
dotenv.config();

// Import models
import User from './models/User.js';
import Package from './models/Package.js';
import Booking from './models/Booking.js';
import Message from './models/Message.js';
import Payment from './models/Payment.js';
import Gallery from './models/Gallery.js';

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wedding-management')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// JWT middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Role-based authorization middleware
const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }
  
  return (req, res, next) => {
    if (!req.user || (roles.length && !roles.includes(req.user.role))) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }
    next();
  };
};

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role: role || 'client'
    });
    
    await user.save();
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '30d' }
    );
    
    // Return user data and token
    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '30d' }
    );
    
    // Return user data and token
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// User routes
app.get('/api/users', authenticateToken, authorize(['admin']), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Packages routes
app.get('/api/packages', async (req, res) => {
  try {
    const { category } = req.query;
    
    const query = category && category !== 'All' ? { category } : {};
    const packages = await Package.find(query);
    
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.post('/api/packages', authenticateToken, authorize(['admin']), async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Booking routes
app.post('/api/bookings', authenticateToken, async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      clientId: req.user.id,
      status: 'pending'
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.get('/api/bookings', authenticateToken, async (req, res) => {
  try {
    let bookings;
    
    // Filter bookings based on user role
    if (req.user.role === 'admin') {
      bookings = await Booking.find().populate('clientId', 'firstName lastName email');
    } else if (req.user.role === 'client') {
      bookings = await Booking.find({ clientId: req.user.id });
    } else if (req.user.role === 'vendor') {
      bookings = await Booking.find({ 
        vendorIds: req.user.id,
        status: { $ne: 'cancelled' } 
      });
    }
    
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Gallery routes
app.get('/api/gallery', async (req, res) => {
  try {
    const { category } = req.query;
    
    const query = category && category !== 'All' ? { category } : {};
    const gallery = await Gallery.find(query);
    
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.post('/api/gallery', authenticateToken, authorize(['admin']), async (req, res) => {
  try {
    const newImage = new Gallery(req.body);
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Messages routes
app.get('/api/messages', authenticateToken, async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { senderId: req.user.id },
        { recipientId: req.user.id }
      ]
    }).sort({ timestamp: 1 });
    
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.get('/api/messages/conversations', authenticateToken, async (req, res) => {
  try {
    // Find all messages where user is sender or recipient
    const messages = await Message.find({
      $or: [
        { senderId: req.user.id },
        { recipientId: req.user.id }
      ]
    }).sort({ timestamp: -1 });
    
    // Extract unique conversation partners
    const conversations = [];
    const conversationPartners = new Set();
    
    messages.forEach(message => {
      const partnerId = message.senderId.toString() === req.user.id 
        ? message.recipientId.toString() 
        : message.senderId.toString();
      
      if (!conversationPartners.has(partnerId)) {
        conversationPartners.add(partnerId);
        
        // Find the latest message for this conversation
        const latestMessage = messages.find(m => 
          (m.senderId.toString() === req.user.id && m.recipientId.toString() === partnerId) ||
          (m.senderId.toString() === partnerId && m.recipientId.toString() === req.user.id)
        );
        
        // Count unread messages
        const unreadCount = messages.filter(m => 
          m.recipientId.toString() === req.user.id && 
          m.senderId.toString() === partnerId &&
          !m.read
        ).length;
        
        // Get partner details
        const partner = message.senderId.toString() === req.user.id 
          ? { id: message.recipientId, name: message.recipientName, role: message.recipientRole }
          : { id: message.senderId, name: message.senderName, role: message.senderRole };
        
        conversations.push({
          partnerId: partner.id,
          partnerName: partner.name,
          partnerRole: partner.role,
          lastMessage: latestMessage.content,
          lastMessageTime: latestMessage.timestamp,
          unreadCount
        });
      }
    });
    
    res.json(conversations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.post('/api/messages', authenticateToken, async (req, res) => {
  try {
    const { recipientId, content } = req.body;
    
    // Get sender and recipient info
    const sender = await User.findById(req.user.id);
    const recipient = await User.findById(recipientId);
    
    if (!recipient) {
      return res.status(404).json({ message: 'Recipient not found' });
    }
    
    const newMessage = new Message({
      senderId: sender._id,
      senderName: `${sender.firstName} ${sender.lastName}`,
      senderRole: sender.role,
      recipientId: recipient._id,
      recipientName: `${recipient.firstName} ${recipient.lastName}`,
      recipientRole: recipient.role,
      content,
      timestamp: new Date(),
      read: false
    });
    
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.put('/api/messages/read/:conversationPartnerId', authenticateToken, async (req, res) => {
  try {
    const { conversationPartnerId } = req.params;
    
    // Mark all messages from this partner as read
    await Message.updateMany({
      recipientId: req.user.id,
      senderId: conversationPartnerId,
      read: false
    }, {
      $set: { read: true }
    });
    
    res.json({ message: 'Messages marked as read' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Payments routes
app.get('/api/payments', authenticateToken, async (req, res) => {
  try {
    let payments;
    
    if (req.user.role === 'admin') {
      payments = await Payment.find().populate('bookingId');
    } else if (req.user.role === 'client') {
      // Find all bookings for this client
      const bookings = await Booking.find({ clientId: req.user.id });
      const bookingIds = bookings.map(booking => booking._id);
      
      // Find payments for these bookings
      payments = await Payment.find({ 
        bookingId: { $in: bookingIds } 
      }).populate('bookingId');
    }
    
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});