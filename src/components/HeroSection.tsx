
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex-1 p-12 flex flex-col justify-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 leading-tight">
          D247: The most popular gambling platform for both sports and casino in India
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          D247 is India's most popular gambling platform for both sports and casino games, offering a seamless and secure betting experience. Whether you're placing bets on top sports events or enjoying thrilling casino games, D247 Exchange provides competitive odds and a user-friendly interface. With a focus on security and reliability, players can bet confidently and enjoy smooth transactions. Join D247 today for exciting gameplay, great rewards, and nonstop entertainment!
        </p>
        
        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
          About Us
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg transform rotate-45 animate-pulse"></div>
      <div className="absolute top-1/3 left-20 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 rounded-full animate-bounce"></div>
    </div>
  );
};

export default HeroSection;
