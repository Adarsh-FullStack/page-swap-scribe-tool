
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { ArrowUp } from 'lucide-react';

const SportsSection = () => {
  const sportsImages = [
    {
      id: 1,
      title: "Poker",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Roulette",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Slots",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Dice Games",
      image: "/api/placeholder/400/300"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Menu Icon */}
        <div className="absolute top-8 left-8">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            Sports To Bet On D247
          </h2>
          <p className="text-gray-300 text-lg">
            Cricket Betting, Online Casino Games and More Sports
          </p>
        </div>

        {/* Sports Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {sportsImages.map((sport) => (
                <CarouselItem key={sport.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="relative group cursor-pointer">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      {/* Placeholder for sport images */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-400/20 flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">{sport.title}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">Play Now</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} className="text-gray-800" />
      </button>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 2.025C6.617 2.025 2.175 6.467 2.175 11.867c0 1.633.4 3.175 1.158 4.525L2 22l5.725-1.3c1.283.7 2.75 1.075 4.292 1.075 5.4 0 9.842-4.442 9.842-9.842C21.859 6.467 17.417 2.025 12.017 2.025zM12 19.367c-1.392 0-2.742-.35-3.942-.983l-.283-.167-2.942.667.667-2.858-.183-.292c-.7-1.117-1.067-2.408-1.067-3.734 0-3.9 3.175-7.075 7.075-7.075s7.075 3.175 7.075 7.075S15.9 19.367 12 19.367z"/>
            <path d="M15.958 13.392c-.217-.108-1.283-.633-1.483-.708-.2-.075-.342-.108-.492.108-.15.217-.583.708-.717.858-.133.15-.267.167-.483.058-.217-.108-.925-.342-1.758-1.083-.65-.583-1.092-1.292-1.217-1.508-.125-.217-.017-.333.092-.442.1-.092.217-.242.325-.358.108-.117.15-.2.225-.342.075-.142.042-.267-.017-.375-.058-.108-.492-1.183-.675-1.617-.183-.417-.367-.358-.5-.358-.125 0-.267-.017-.417-.017-.15 0-.392.058-.6.275-.208.217-.792.775-.792 1.892s.808 2.192.925 2.342c.117.15 1.633 2.492 3.967 3.492 2.325 1 2.325.667 2.75.625.425-.042 1.367-.558 1.558-1.1s.192-.992.133-1.092c-.058-.1-.208-.158-.425-.267z"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SportsSection;
