import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, MessageSquare, Clock, User, ChevronRight, ChevronDown,
<<<<<<< HEAD
  DollarSign, Star
=======
  DollarSign, Star, Users
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { DASHBOARD_MENUS } from '../../../utils/constants';

const VendorOverview = () => {
<<<<<<< HEAD
  const stats = {
    activeWeddings: 5,
    completedWeddings: 12,
    totalEarnings: 45000,
    averageRating: 4.8
  };

  const upcomingWeddings = [
    {
      id: 'WB-2024-001',
      couple: 'Michael & Emma',
      date: '2024-07-15',
      venue: 'Sunset Gardens',
      services: ['Photography', 'Videography']
    },
    {
      id: 'WB-2024-002',
      couple: 'David & Lisa',
      date: '2024-08-22',
      venue: 'Beachside Resort',
      services: ['Photography']
=======
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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
    }
  ];

  return (
    <div className="space-y-8">
<<<<<<< HEAD
      <h2 className="text-2xl font-bold mb-6">Vendor Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Active Weddings</h3>
          <p className="text-3xl font-bold">{stats.activeWeddings}</p>
          <p className="text-sm text-gray-500 mt-2">Currently in progress</p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Completed</h3>
          <p className="text-3xl font-bold">{stats.completedWeddings}</p>
          <p className="text-sm text-gray-500 mt-2">Total weddings completed</p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Total Earnings</h3>
          <p className="text-3xl font-bold">${stats.totalEarnings.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">All time earnings</p>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-2">Rating</h3>
          <p className="text-3xl font-bold">{stats.averageRating}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(stats.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Weddings */}
      <div className="card p-6">
        <h3 className="text-lg font-medium mb-4">Upcoming Weddings</h3>
        <div className="space-y-4">
          {upcomingWeddings.map(wedding => (
            <div key={wedding.id} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{wedding.couple}</h4>
                  <p className="text-sm text-gray-500">{wedding.venue}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {wedding.services.map(service => (
                      <span key={service} className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{new Date(wedding.date).toLocaleDateString()}</p>
                  <button className="text-primary-600 text-sm mt-2">View Details</button>
                </div>
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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
        </div>
      </div>
    </div>
  );
};

const VendorWeddings = () => {
  const weddings = [
    {
      id: 'WB-2024-001',
<<<<<<< HEAD
      couple: 'Michael & Emma',
      date: '2024-07-15',
      venue: 'Sunset Gardens',
      services: ['Photography', 'Videography'],
      status: 'upcoming'
    },
    {
      id: 'WB-2024-002',
      couple: 'David & Lisa',
      date: '2024-08-22',
      venue: 'Beachside Resort',
      services: ['Photography'],
      status: 'completed'
=======
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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Assigned Weddings</h2>
<<<<<<< HEAD
      
      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wedding ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Couple</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {weddings.map(wedding => (
              <tr key={wedding.id}>
                <td className="px-6 py-4 whitespace-nowrap">{wedding.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{wedding.couple}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(wedding.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{wedding.venue}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {wedding.services.map(service => (
                      <span key={service} className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    wedding.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {wedding.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary-600 hover:text-primary-900">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
=======

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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      </div>
    </div>
  );
};

const VendorMessages = () => {
  const messages = [
    {
      id: 1,
<<<<<<< HEAD
      from: 'Michael & Emma',
      message: 'Hi, we would like to discuss the photography package for our wedding.',
      time: '2 hours ago',
=======
      from: 'Sarah Johnson',
      subject: 'Wedding Photography Details',
      message: 'Hi, I wanted to discuss the photography timeline for our wedding...',
      date: '2024-03-15 10:30 AM',
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      unread: true
    },
    {
      id: 2,
<<<<<<< HEAD
      from: 'Wedding Coordinator',
      message: 'Please confirm your availability for the upcoming wedding next month.',
      time: '1 day ago',
=======
      from: 'Michael Smith',
      subject: 'Venue Setup Question',
      message: 'Quick question about the venue setup for next week...',
      date: '2024-03-14 3:45 PM',
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      unread: false
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>
<<<<<<< HEAD
      
      <div className="card divide-y divide-gray-200">
        {messages.map(message => (
          <div key={message.id} className={`p-4 ${message.unread ? 'bg-primary-50' : ''}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{message.from}</h3>
                <p className="text-gray-600 mt-1">{message.message}</p>
              </div>
              <div className="text-sm text-gray-500">{message.time}</div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="text-primary-600">Reply</button>
              {message.unread && (
                <button className="text-gray-600">Mark as Read</button>
              )}
=======

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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
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
<<<<<<< HEAD
      date: '2024-07-15',
      events: [
        { time: '14:00', event: 'Wedding Ceremony - Michael & Emma' },
        { time: '16:00', event: 'Reception Photography' }
      ]
    },
    {
      date: '2024-07-22',
      events: [
        { time: '10:00', event: 'Engagement Shoot - David & Lisa' }
=======
      date: '2024-04-15',
      events: [
        { time: '14:00-18:00', type: 'Wedding Ceremony', client: 'Sarah & Michael' }
      ]
    },
    {
      date: '2024-04-20',
      events: [
        { time: '16:30-22:00', type: 'Wedding Reception', client: 'Emma & James' }
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Availability Calendar</h2>
<<<<<<< HEAD
        <button className="btn btn-primary">Add Event</button>
      </div>
      
      <div className="card p-6">
        <div className="space-y-6">
          {schedule.map(day => (
            <div key={day.date} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <h3 className="font-medium mb-4">{new Date(day.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</h3>
              <div className="space-y-3">
                {day.events.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-20 font-medium">{event.time}</div>
                    <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                      {event.event}
                    </div>
                  </div>
                ))}
              </div>
=======
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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VendorProfile = () => {
  const [profile, setProfile] = useState({
<<<<<<< HEAD
    specialties: ['Wedding Photography', 'Videography'],
    experience: '5 years',
    portfolio: [
      {
        id: 1,
        title: 'Beach Wedding',
        image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg'
      },
      {
        id: 2,
        title: 'Garden Reception',
        image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg'
      }
    ]
=======
    firstName: 'Vendor',
    lastName: 'User',
    email: 'vendor@example.com',
    phone: '(555) 123-4567',
    specialties: ['Photography', 'Videography'],
    bio: 'Professional wedding photographer with over 5 years of experience...'
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Vendor Profile</h2>
<<<<<<< HEAD
      
      <div className="card p-6">
        <h3 className="text-lg font-medium mb-4">Specialties & Experience</h3>
        <div className="space-y-4">
          <div>
            <label className="form-label">Specialties</label>
            <div className="flex flex-wrap gap-2">
              {profile.specialties.map(specialty => (
                <span key={specialty} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          <div>
            <label className="form-label">Experience</label>
            <p>{profile.experience}</p>
          </div>
        </div>
      </div>
      
      <div className="card p-6">
        <h3 className="text-lg font-medium mb-4">Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.portfolio.map(item => (
            <div key={item.id} className="overflow-hidden rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <p className="mt-2 font-medium">{item.title}</p>
            </div>
          ))}
=======

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
>>>>>>> 34470c733b90f6947a549f930e44ca1fd4f35fc3
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
