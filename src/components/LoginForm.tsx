
import React, { useState } from 'react';
import { User, Lock, LogIn, UserCheck, Key } from 'lucide-react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-gradient-to-br from-blue-700/90 to-blue-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-500/30 w-96">
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2">
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
      </div>
      
      {/* Login Header */}
      <div className="flex items-center justify-center mb-6">
        <User className="text-cyan-400 mr-2" size={24} />
        <h2 className="text-xl font-bold text-white">LOGIN</h2>
      </div>
      
      {/* Login Form */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white/95 text-gray-800 px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
          />
        </div>
        
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/95 text-gray-800 px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
          />
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
          <span>Login</span>
          <LogIn size={18} />
        </button>
        
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
          <span>Login With Demo ID</span>
          <UserCheck size={18} />
        </button>
        
        <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
          <Key size={18} />
          <span>Click Here Forget Password</span>
        </button>
      </div>
      
      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-gray-300 text-sm">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
          {' '}and{' '}
          <a href="#" className="text-cyan-400 hover:text-cyan-300">Terms</a> of Service apply.
        </p>
        <p className="text-cyan-400 font-semibold mt-2">D247@gmail.com</p>
      </div>
    </div>
  );
};

export default LoginForm;
