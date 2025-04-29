
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingBag, 
  Bell, 
  FileText, 
  Users, 
  Tag, 
  Ticket, 
  Truck, 
  LogOut, 
  Menu, 
  X
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/product-management', label: 'Product Management', icon: ShoppingBag },
  { path: '/package-management', label: 'Package Management', icon: Package },
  { path: '/notifications', label: 'Notifications & Alerts', icon: Bell },
  { path: '/order-management', label: 'Order Management', icon: FileText },
  { path: '/customer-management', label: 'Customer Management', icon: Users },
  { path: '/offers-promotions', label: 'Offers/ Promotions Management', icon: Tag },
  { path: '/coupon-management', label: 'Coupon Management', icon: Ticket },
  { path: '/dispatcher', label: 'Dispatcher', icon: Truck },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  return (
    <>
      {/* Mobile menu toggle button - visible only on mobile */}
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      )}
      
      {/* Sidebar - shown based on screen size or toggle state */}
      <aside 
        className={cn(
          "bg-brand-dark h-screen min-w-64 flex flex-col z-40",
          isMobile ? "fixed top-0 left-0 animate-slide-in-left" : "relative",
          isMobile && !isOpen ? "-translate-x-full" : "translate-x-0",
          "transition-transform duration-300"
        )}
      >
        {/* Logo */}
        <div className="p-6">
          <div className="text-brand-accent text-3xl font-bold">iifym</div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                    "text-gray-300 hover:bg-gray-800 hover:text-white",
                    isActive && "bg-gray-800 text-white font-medium"
                  )}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
        
        {/* Logout Button */}
        <div className="p-4 border-t border-gray-800">
          <Link to="/logout" className="flex items-center gap-2 px-3 py-2 rounded-md text-red-400 hover:bg-gray-800 hover:text-red-300 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
      
      {/* Overlay to close sidebar on mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
