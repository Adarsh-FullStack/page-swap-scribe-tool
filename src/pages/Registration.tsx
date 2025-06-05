
import React from 'react';
import Header from '../components/Header';

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
              D247 Registration: Get Started Today And Unlock Exciting Sports Betting And More
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Join D247 today and experience the thrill of sports betting and top casino games. 
              D247 Sign up now to access exclusive rewards, secure transactions, and a 
              seamless gaming platform. Follow these simple steps to get started!
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-white">Steps for D247 registration:</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-cyan-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">1</span>
                  <p className="text-gray-300"><span className="font-semibold">Visit the Official Website</span> – Go to D247.com or download the D247 app.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-cyan-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">2</span>
                  <p className="text-gray-300"><span className="font-semibold">Click on D247 Sign up</span> – Select the D247 registration option to create your account.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-cyan-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">3</span>
                  <p className="text-gray-300"><span className="font-semibold">Enter Your Details</span> – Provide your name, email, phone number, and create a strong password.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-cyan-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">4</span>
                  <p className="text-gray-300"><span className="font-semibold">Verify Your Account</span> – Complete the verification process via OTP or email confirmation.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-cyan-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">5</span>
                  <p className="text-gray-300"><span className="font-semibold">Make Your First Deposit</span> – Add funds to start betting on sports and casino games.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-cyan-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">6</span>
                  <p className="text-gray-300"><span className="font-semibold">Start Betting!</span> – Explore exciting games, place bets, and enjoy exclusive platform rewards.</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Register now on D247 Exchange and take your betting experience to the next level 
              with exciting sports and casino games. Enjoy seamless gameplay, secure 
              transactions, and exclusive platform rewards. Don't miss out – D247 Sign up today 
              and start winning big!
            </p>
            
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              How To Get D247 ID
            </button>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Cricket Player" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Smaller images */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80" 
                alt="Cricket 1" 
                className="w-24 h-24 rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&q=80" 
                alt="Cricket 2" 
                className="w-24 h-24 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
