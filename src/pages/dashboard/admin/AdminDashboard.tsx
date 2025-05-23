import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Image, Package2, ChevronRight, ChevronDown,
<<<<<<< HEAD
  UserPlus, CheckCircle, AlertTriangle
=======
  UserPlus, DollarSign, MessageSquare, Settings
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { DASHBOARD_MENUS } from '../../../utils/constants';

<<<<<<< HEAD
// Admin dashboard components
const AdminOverview = () => {
  const stats = {
    totalUsers: 156,
    activeWeddings: 24,
    totalBookings: 89,
    revenue: 125000
  };

  const recentActivities = [
    { type: 'user_registered', user: 'Sarah Johnson', time: '2 hours ago' },
    { type: 'booking_confirmed', client: 'Michael & Emma', time: '4 hours ago' },
    { type: 'payment_received', amount: 2500, client: 'David & Lisa', time: '6 hours ago' },
    { type: 'vendor_joined', vendor: 'Elite Photography', time: '1 day ago' }
=======
// Import admin dashboard components
const AdminOverview = () => {
  const stats = [
    { 
      title: 'Total Users',
      value: '2,458',
      change: '+12.5%',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      positive: true
    },
    {
      title: 'Active Bookings',
      value: '186',
      change: '+8.2%',
      icon: <Calendar className="w-6 h-6 text-green-600" />,
      positive: true
    },
    {
      title: 'Monthly Revenue',
      value: '$45,289',
      change: '-2.4%',
      icon: <DollarSign className="w-6 h-6 text-red-600" />,
      positive: false
    },
    {
      title: 'New Inquiries',
      value: '24',
      change: '+18.7%',
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      positive: true
    }
  ];

  const recentUsers = [
    { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'client', date: '2024-03-15' },
    { name: 'Mike Peterson', email: 'mike@example.com', role: 'vendor', date: '2024-03-14' },
    { name: 'Emma Wilson', email: 'emma@example.com', role: 'client', date: '2024-03-13' }
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
  ];

  return (
    <div className="space-y-8">
<<<<<<< HEAD
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
          <p className="text-sm text-gray-500 mt-2">+12 this month</p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Active Weddings</h3>
          <p className="text-3xl font-bold">{stats.activeWeddings}</p>
          <p className="text-sm text-gray-500 mt-2">Scheduled this month</p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold">{stats.totalBookings}</p>
          <p className="text-sm text-gray-500 mt-2">+8 this week</p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">${stats.revenue.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">This month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-6">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              {activity.type === 'user_registered' && (
                <UserPlus className="w-5 h-5 text-blue-500" />
              )}
              {activity.type === 'booking_confirmed' && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {activity.type === 'payment_received' && (
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
              )}
              {activity.type === 'vendor_joined' && (
                <Package2 className="w-5 h-5 text-purple-500" />
              )}
              <div className="flex-1">
                <p className="text-sm">
                  {activity.type === 'user_registered' && (
                    <>New user registered: <strong>{activity.user}</strong></>
                  )}
                  {activity.type === 'booking_confirmed' && (
                    <>Wedding booking confirmed for <strong>{activity.client}</strong></>
                  )}
                  {activity.type === 'payment_received' && (
                    <>Payment of <strong>${activity.amount}</strong> received from <strong>{activity.client}</strong></>
                  )}
                  {activity.type === 'vendor_joined' && (
                    <>New vendor joined: <strong>{activity.vendor}</strong></>
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
=======
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
          <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
          <div className="divide-y">
            {recentUsers.map((user, index) => (
              <div key={index} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100">
                    {user.role}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{user.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
              <UserPlus className="w-6 h-6 text-blue-600 mb-2" />
              <p className="font-medium">Add New User</p>
              <p className="text-sm text-gray-500">Create user account</p>
            </button>
            <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
              <Settings className="w-6 h-6 text-gray-600 mb-2" />
              <p className="font-medium">System Settings</p>
              <p className="text-sm text-gray-500">Configure platform</p>
            </button>
          </div>
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
        </div>
      </div>
    </div>
  );
};

const AdminUsers = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'client', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'vendor', status: 'active' },
<<<<<<< HEAD
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'client', status: 'inactive' }
=======
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin', status: 'active' },
    { id: 4, name: 'Client User', email: 'client@example.com', role: 'client', status: 'active' },
    { id: 5, name: 'Vendor User', email: 'vendor@example.com', role: 'vendor', status: 'active' }
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Users</h2>
        <button className="btn btn-primary">Add New User</button>
      </div>
<<<<<<< HEAD
      
=======

>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
<<<<<<< HEAD
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
=======
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
                  <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminBookings = () => {
  const bookings = [
    {
      id: 'WB-2024-001',
<<<<<<< HEAD
      couple: 'Michael & Emma',
      date: '2024-07-15',
      venue: 'Sunset Gardens',
      status: 'confirmed',
      amount: 12000
    },
    {
      id: 'WB-2024-002',
      couple: 'David & Lisa',
      date: '2024-08-22',
      venue: 'Beachside Resort',
      status: 'pending',
      amount: 15000
=======
      couple: 'Emma & James',
      date: '2024-07-15',
      venue: 'Crystal Gardens',
      status: 'confirmed',
      amount: 12500
    },
    {
      id: 'WB-2024-002',
      couple: 'Sophie & Michael',
      date: '2024-08-22',
      venue: 'Sunset Beach Resort',
      status: 'pending',
      amount: 15800
    },
    {
      id: 'WB-2024-003',
      couple: 'Oliver & Sarah',
      date: '2024-09-05',
      venue: 'Mountain View Lodge',
      status: 'confirmed',
      amount: 18200
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
    }
  ];

  return (
    <div className="space-y-6">
<<<<<<< HEAD
      <h2 className="text-2xl font-bold">Manage Bookings</h2>
      
      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Couple</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.couple}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(booking.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.venue}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${booking.amount.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary-600 hover:text-primary-900 mr-3">View</button>
                  <button className="text-red-600 hover:text-red-900">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
=======
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Bookings</h2>
        <button className="btn btn-primary">Add Booking</button>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="card p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{booking.couple}</h3>
                <p className="text-gray-500">Booking ID: {booking.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                booking.status === 'confirmed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Wedding Date</p>
                <p className="font-medium">{booking.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Venue</p>
                <p className="font-medium">{booking.venue}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">${booking.amount.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-3">
              <button className="btn btn-outline">View Details</button>
              <button className="btn btn-primary">Edit Booking</button>
            </div>
          </div>
        ))}
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      </div>
    </div>
  );
};

const AdminPackages = () => {
  const packages = [
    {
      id: 1,
<<<<<<< HEAD
      name: 'Intimate Ceremony',
      category: 'Venue',
      price: 2500,
=======
      name: 'Classic Wedding Package',
      price: 5000,
      category: 'Full Service',
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      status: 'active'
    },
    {
      id: 2,
      name: 'Premium Photography',
<<<<<<< HEAD
      category: 'Photography',
      price: 3500,
=======
      price: 2500,
      category: 'Photography',
      status: 'active'
    },
    {
      id: 3,
      name: 'Deluxe Catering',
      price: 3500,
      category: 'Catering',
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      status: 'active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Packages</h2>
        <button className="btn btn-primary">Add New Package</button>
      </div>
<<<<<<< HEAD
      
      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map(pkg => (
              <tr key={pkg.id}>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${pkg.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {pkg.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
=======

      <div className="grid gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="card p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="text-gray-500">{pkg.category}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">${pkg.price}</p>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  {pkg.status}
                </span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-3">
              <button className="btn btn-outline">Edit</button>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        ))}
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      </div>
    </div>
  );
};

const AdminGallery = () => {
<<<<<<< HEAD
  const images = [
    {
      id: 1,
      title: 'Beach Wedding',
      category: 'Ceremony',
      url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg'
=======
  const gallery = [
    {
      id: 1,
      title: 'Beach Wedding Ceremony',
      category: 'Ceremony',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg'
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
    },
    {
      id: 2,
      title: 'Garden Reception',
      category: 'Reception',
<<<<<<< HEAD
      url: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg'
=======
      image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg'
    },
    {
      id: 3,
      title: 'Elegant Table Setting',
      category: 'Decor',
      image: 'https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg'
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Gallery</h2>
<<<<<<< HEAD
        <button className="btn btn-primary">Add New Image</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(image => (
          <div key={image.id} className="card overflow-hidden">
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-medium">{image.title}</h3>
              <p className="text-sm text-gray-500">{image.category}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-primary-600 hover:text-primary-900">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
=======
        <button className="btn btn-primary">Upload Images</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div key={item.id} className="card overflow-hidden">
            <div className="aspect-[4/3]">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <div className="mt-3 flex justify-end space-x-2">
                <button className="btn btn-outline text-sm">Edit</button>
                <button className="btn btn-outline text-sm text-red-600 hover:text-red-700">
                  Delete
                </button>
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  
  if (!user) return null;
  
  const adminMenuItems = DASHBOARD_MENUS.admin;
  
  const getIcon = (label: string) => {
    switch(label) {
      case 'Overview': return <LayoutDashboard className="w-5 h-5" />;
      case 'Manage Users': return <Users className="w-5 h-5" />;
      case 'Manage Bookings': return <Calendar className="w-5 h-5" />;
      case 'Manage Packages': return <Package2 className="w-5 h-5" />;
      case 'Manage Gallery': return <Image className="w-5 h-5" />;
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
          <span className="font-medium">Admin Menu</span>
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
          <h2 className="text-lg font-semibold font-heading">Admin Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">
            Welcome, {user.firstName} {user.lastName}
          </p>
        </div>
        
        <nav className="py-4">
          <ul className="space-y-1">
            {adminMenuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/dashboard/admin'}
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
          <Route index element={<AdminOverview />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="gallery" element={<AdminGallery />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
