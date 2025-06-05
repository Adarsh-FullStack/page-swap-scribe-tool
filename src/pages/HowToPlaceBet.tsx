
import React from 'react';
import Header from '../components/Header';
import { User, Wallet, Plus, Check, ArrowUp, ArrowDown } from 'lucide-react';

const HowToPlaceBet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        {/* Statistics Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+25k</div>
              <div className="text-blue-100">Online Bettors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+200k</div>
              <div className="text-blue-100">Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+500</div>
              <div className="text-blue-100">New ID</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+100₹</div>
              <div className="text-blue-100">Min ID</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
          How To Place A Bet At D247 Exchange
        </h1>
        
        {/* Betting Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30">
            <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <User className="text-black" size={32} />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Register/Login</h3>
            <p className="text-gray-300">
              Before you can place bets, you'll need to sign up for an account. Visit the 
              official D247.com website, click on the "Sign Up" button, and provide the 
              required details such as your name, email address, and password. 
              Complete the verification process, and you're ready to go.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30">
            <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <Wallet className="text-black" size={32} />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Make a Deposit</h3>
            <p className="text-gray-300">
              To place real money bets, you'll need to deposit funds into your account. 
              D247 Exchange offers a variety of deposit methods, including credit 
              cards, debit cards, e-wallets, and bank transfers. Choose your preferred 
              method, enter the deposit amount, and confirm the transaction.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30">
            <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <Plus className="text-black" size={32} />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Navigate to the Sports / Casino Section</h3>
            <p className="text-gray-300">
              Once your account is funded, head to the sports or casino section of the 
              D247 website. Here, you can browse through the wide selection of live 
              sports, cricket, casino games available.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30">
            <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <Check className="text-black" size={32} />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Choose Your Game</h3>
            <p className="text-gray-300">
              Select the game you want to play. Each game will have a different set of 
              rules, so be sure to read through the instructions or game details if 
              you're unfamiliar with it. Once you're ready, enter the amount you wish to 
              bet and click "Start" or "Play" to begin.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30">
            <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <ArrowUp className="text-black" size={32} />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Enjoy Live Betting</h3>
            <p className="text-gray-300">
              If you prefer sports betting, D247 Exchange also offers a variety of sports 
              markets with real-time updates. Simply navigate to the sports section, 
              pick the sport and match you want to bet on, and choose from available 
              betting options such as match winner, total goals, or live in-play bets.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30">
            <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <ArrowDown className="text-black" size={32} />
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Withdraw Your Winnings</h3>
            <p className="text-gray-300">
              When you're ready to withdraw your winnings, D247 provides fast and 
              secure withdrawal options. Head to the "Withdraw" section in your 
              account, select your preferred withdrawal method, enter the amount, 
              and confirm the transaction. Depending on the method, your winnings 
              will be credited to your account within a short time frame.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlaceBet;
