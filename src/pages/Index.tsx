
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoginForm from '../components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)]">
        <HeroSection />
        
        {/* Login Section */}
        <div className="flex items-center justify-center p-12 min-w-[500px]">
          <LoginForm />
        </div>
      </div>
      
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 2.025C6.617 2.025 2.175 6.467 2.175 11.867c0 1.633.4 3.175 1.158 4.525L2 22l5.725-1.3c1.283.7 2.75 1.075 4.292 1.075 5.4 0 9.842-4.442 9.842-9.842C21.859 6.467 17.417 2.025 12.017 2.025zM12 19.367c-1.392 0-2.742-.35-3.942-.983l-.283-.167-2.942.667.667-2.858-.183-.292c-.7-1.117-1.067-2.408-1.067-3.734 0-3.9 3.175-7.075 7.075-7.075s7.075 3.175 7.075 7.075S15.9 19.367 12 19.367z"/>
            <path d="M15.958 13.392c-.217-.108-1.283-.633-1.483-.708-.2-.075-.342-.108-.492.108-.15.217-.583.708-.717.858-.133.15-.267.167-.483.058-.217-.108-.925-.342-1.758-1.083-.65-.583-1.092-1.292-1.217-1.508-.125-.217-.017-.333.092-.442.1-.092.217-.242.325-.358.108-.117.15-.2.225-.342.075-.142.042-.267-.017-.375-.058-.108-.492-1.183-.675-1.617-.183-.417-.367-.358-.5-.358-.125 0-.267-.017-.417-.017-.15 0-.392.058-.6.275-.208.217-.792.775-.792 1.892s.808 2.192.925 2.342c.117.15 1.633 2.492 3.967 3.492 2.325 1 2.325.667 2.75.625.425-.042 1.367-.558 1.558-1.1s.192-.992.133-1.092c-.058-.1-.208-.158-.425-.267z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;
