import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Image, Package2, ChevronRight, ChevronDown
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { DASHBOARD_MENUS } from '../../../utils/constants';

// Import admin dashboard components
const AdminOverview = () => <div>Admin Overview</div>;
const AdminUsers = () => <div>Manage Users</div>;
const AdminBookings = () => <div>Manage Bookings</div>;
const AdminPackages = () => <div>Manage Packages</div>;
const AdminGallery = () => <div>Manage Gallery</div>;

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