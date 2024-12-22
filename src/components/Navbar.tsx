import React from 'react';
import { Link } from 'react-router-dom';
import { HelpingHand } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <HelpingHand className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TheFix</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              Iniciar Sesión
            </Link>
            <Link to="/register">
              <Button variant="primary" className="!px-4 !py-2">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;