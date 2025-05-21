import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, MessageSquare, Clock, User, ChevronRight, ChevronDown,
  DollarSign, Star, Users
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { DASHBOARD_MENUS } from '../../../utils/constants';

const VendorOverview = () => {
  const stats = [
    {
      title: 'Total Bookings',
      value: '24',
      change: '+15%',
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      positive: true
    },
    {
      title: 'Revenue',
      value: '$12,450',
      change: '+8.2%',
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      positive: true
    },
    {
      title: 'Rating',
      value: '4.8',
      change: '+0.2',
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      positive: true
    },
    {
      title: 'Total Clients',
      value: '156',
      change: '+12',
      icon: <Users className="w-6 h-6 text-purple-600" />,
      positive: true
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      couple: 'Sarah & Michael',
      date: '2024-04-15',
      time: '14:00',
      type: 'Wedding Ceremony',
      location: 'Crystal Gardens'
    },
    {
      id: 2,
      couple: 'Emma & James',
      date: '2024-04-20',
      time: '16:30',
      type: 'Wedding Reception',
      location: 'Grand Ballroom'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
              </div>
              {stat.icon}
            </div>
            <div className={`mt-2 text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="divide-y">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{event.couple}</h3>
                    <p className="text-sm text-gray-500">{event.type}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-600">
                "Amazing service! Made our special day even more perfect."
              </p>
              <p className="text-sm font-medium mt-1">- Emma & James</p>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">1 week ago</span>
              </div>
              <p className="text-gray-600">
                "Professional and attentive to every detail. Highly recommend!"
              </p>
              <p className="text-sm font-medium mt-1">- Sarah & Michael</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VendorWeddings = () => {
  const weddings = [
    {
      id: 'WB-2024-001',
      couple: 'Sarah & Michael',
      date: '2024-07-15',
      venue: 'Crystal Gardens',
      status: 'upcoming',
      services: ['Photography', 'Videography']
    },
    {
      id: 'WB-2024-002',
      couple: 'Emma & James',
      date: '2024-08-22',
      venue: 'Grand Ballroom',
      status: 'upcoming',
      services: ['Full Planning', 'Decoration']
    },
    {
      id: 'WB-2024-003',
      couple: 'Sophie & William',
      date: '2024-06-10',
      venue: 'Sunset Beach Resort',
      status: 'completed',
      services: ['Photography']
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Assigned Weddings</h2>

      <div className="grid gap-6">
        {weddings.map((wedding) => (
          <div key={wedding.id} className="card p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{wedding.couple}</h3>
                <p className="text-gray-500">Booking ID: {wedding.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                wedding.status === 'upcoming' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {wedding.status.charAt(0).toUpperCase() + wedding.status.slice(1)}
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Wedding Date</p>
                <p className="font-medium">{wedding.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Venue</p>
                <p className="font-medium">{wedding.venue}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Services</p>
                <p className="font-medium">{wedding.services.join(', ')}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-3">
              <button className="btn btn-outline">View Timeline</button>
              <button className="btn btn-primary">Manage Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VendorMessages = () => {
  const messages = [
    {
      id: 1,
      from: 'Sarah Johnson',
      subject: 'Wedding Photography Details',
      message: 'Hi, I wanted to discuss the photography timeline for our wedding...',
      date: '2024-03-15 10:30 AM',
      unread: true
    },
    {
      id: 2,
      from: 'Michael Smith',
      subject: 'Venue Setup Question',
      message: 'Quick question about the venue setup for next week...',
      date: '2024-03-14 3:45 PM',
      unread: false
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>

      <div className="card divide-y">
        {messages.map((message) => (
          <div key={message.id} className={`p-4 ${message.unread ? 'bg-blue-50' : ''}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{message.from}</h3>
                <p className="text-sm text-gray-500">{message.subject}</p>
              </div>
              <span className="text-sm text-gray-500">{message.date}</span>
            </div>
            <p className="mt-2 text-gray-600">{message.message}</p>
            <div className="mt-3 flex justify-end">
              <button className="btn btn-outline">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VendorAvailability = () => {
  const schedule = [
    {
      date: '2024-04-15',
      events: [
        { time: '14:00-18:00', type: 'Wedding Ceremony', client: 'Sarah & Michael' }
      ]
    },
    {
      date: '2024-04-20',
      events: [
        { time: '16:30-22:00', type: 'Wedding Reception', client: 'Emma & James' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Availability Calendar</h2>
        <button className="btn btn-primary">Update Schedule</button>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-medium mb-4">Upcoming Schedule</h3>
        <div className="space-y-4">
          {schedule.map((day, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="font-medium mb-2">{day.date}</h4>
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">{event.time}</p>
                  <p className="text-gray-600">{event.type}</p>
                  <p className="text-sm text-gray-500">{event.client}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VendorProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Vendor',
    lastName: 'User',
    email: 'vendor@example.com',
    phone: '(555) 123-4567',
    specialties: ['Photography', 'Videography'],
    bio: 'Professional wedding photographer with over 5 years of experience...'
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Vendor Profile</h2>

      <div className="card p-6">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <button className="absolute bottom-0 right-0 bg-primary-500 rounded-full p-2">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="input"
              value={profile.firstName}
              onChange={() => {}}
            />
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="input"
              value={profile.lastName}
              onChange={() => {}}
            />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="input"
              value={profile.email}
              onChange={() => {}}
              disabled
            />
          </div>
          <div>
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="input"
              value={profile.phone}
              onChange={() => {}}
            />
          </div>
          <div className="md:col-span-2">
            <label className="form-label">Bio</label>
            <textarea
              className="input"
              rows={4}
              value={profile.bio}
              onChange={() => {}}
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

const VendorDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  
  if (!user) return null;
  
  const vendorMenuItems = DASHBOARD_MENUS.vendor;
  
  const getIcon = (label: string) => {
    switch(label) {
      case 'Overview': return <LayoutDashboard className="w-5 h-5" />;
      case 'Assigned Weddings': return <Calendar className="w-5 h-5" />;
      case 'Messages': return <MessageSquare className="w-5 h-5" />;
      case 'Availability': return <Clock className="w-5 h-5" />;
      case 'Profile': return <User className="w-5 h-5" />;
      default: return <LayoutDashboard className="w-5 h-5" />;
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-16">
      {/* Mobile menu toggle */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-between w-full"
        >
          <span className="font-medium">Dashboard Menu</span>
          {mobileMenuOpen ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`md:w-64 bg-white border-r border-gray-200 md:block ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold font-heading">Vendor Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">
            Welcome, {user.firstName} {user.lastName}
          </p>
        </div>
        
        <nav className="py-4">
          <ul className="space-y-1">
            {vendorMenuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/dashboard/vendor'}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors ${
                      isActive ? 'bg-primary-50 text-primary-700 border-r-4 border-primary-500' : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {getIcon(item.label)}
                  <span className="ml-3">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Routes>
          <Route index element={<VendorOverview />} />
          <Route path="weddings" element={<VendorWeddings />} />
          <Route path="messages" element={<VendorMessages />} />
          <Route path="availability" element={<VendorAvailability />} />
          <Route path="profile" element={<VendorProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default VendorDashboard;