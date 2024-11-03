import { Menu, X, Gift, Calendar, Bell, User } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">GiftHub</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-gray-600 hover:text-indigo-600 flex items-center space-x-1">
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </a>
            <a href="#registry" className="text-gray-600 hover:text-indigo-600 flex items-center space-x-1">
              <Gift className="h-5 w-5" />
              <span>Registry</span>
            </a>
            <button className="relative">
              <Bell className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                2
              </span>
            </button>
            <button className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#events" className="text-gray-600 hover:text-indigo-600 block px-3 py-2">Events</a>
            <a href="#registry" className="text-gray-600 hover:text-indigo-600 block px-3 py-2">Registry</a>
            <a href="#notifications" className="text-gray-600 hover:text-indigo-600 block px-3 py-2">Notifications</a>
            <a href="#signin" className="text-gray-600 hover:text-indigo-600 block px-3 py-2">Sign In</a>
          </div>
        </div>
      )}
    </nav>
  );
}