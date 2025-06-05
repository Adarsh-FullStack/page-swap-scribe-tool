
import React from 'react';
import { MessageCircle, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Payment Methods */}
        <div className="flex justify-center space-x-6 mb-16">
          <div className="bg-white rounded-lg p-4 w-20 h-12 flex items-center justify-center">
            <span className="text-black font-bold text-sm">Bank</span>
          </div>
          <div className="bg-white rounded-lg p-4 w-20 h-12 flex items-center justify-center">
            <span className="text-black font-bold text-sm">G Pay</span>
          </div>
          <div className="bg-white rounded-lg p-4 w-20 h-12 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">Paytm</span>
          </div>
          <div className="bg-white rounded-lg p-4 w-20 h-12 flex items-center justify-center">
            <span className="text-purple-600 font-bold text-sm">PhonePe</span>
          </div>
          <div className="bg-white rounded-lg p-4 w-20 h-12 flex items-center justify-center">
            <span className="text-black font-bold text-sm">UPI</span>
          </div>
        </div>

        {/* WhatsApp Support Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-4">D247 Whatsapp Number For 24/7 Customer Support</h2>
              <p className="text-blue-100 mb-6">
                Get in touch with D247 whatsapp number for any Queries, Emergencies, Feedback or 
                Complaints. We are here to help you 24/7 with our online services.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                D247 Contact Number
              </button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/lovable-uploads/df86535f-d86b-422f-87d2-7676d83d00e1.png" 
                alt="Cricket players" 
                className="w-80 h-60 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <span className="text-white text-2xl font-bold">D247</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              D247 is a trusted online betting exchange offering a secure and seamless gaming 
              experience. Access sports betting, casino games, and more with a user-friendly 
              interface on D247.com. Easily register, get your D247 ID, and enjoy smooth 
              transactions via the D247 app. For support, connect via the D247 WhatsApp 
              number or customer care.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Online ID</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">D247</a></li>
            </ul>
            
            {/* Age Verification Icons */}
            <div className="mt-8 space-y-4">
              <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">18+</span>
              </div>
              <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🌐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
              <MessageCircle size={20} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Instagram size={20} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Send size={20} className="text-white" />
            </a>
          </div>
          
          <div className="flex space-x-8 text-gray-400 text-sm">
            <span>© 2025 D247 All rights reserved</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
