
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          <span className="text-white text-2xl font-bold">D247</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-cyan-200 transition-colors font-medium">HOME</Link>
          <Link to="/registration" className="text-white hover:text-cyan-200 transition-colors font-medium">REGISTRATION</Link>
          <Link to="/how-to-get-id" className="text-white hover:text-cyan-200 transition-colors font-medium">GET ID</Link>
          <Link to="/how-to-place-bet" className="text-white hover:text-cyan-200 transition-colors font-medium">PLACE BET</Link>
          <a href="#" className="text-white hover:text-cyan-200 transition-colors font-medium">CONTACT</a>
          <a href="#" className="text-white hover:text-cyan-200 transition-colors font-medium">BLOG</a>
        </nav>
        
        <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 border border-white/30">
          <MessageCircle size={18} />
          <span className="font-medium">WHATSAPP</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
