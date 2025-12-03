import React from 'react';
import { HOTEL_NAME, TAGLINE, ROOMS, REVIEWS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full bg-stone-900">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600" 
          alt="Cozy Cottage Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-brand-cream font-bold mb-4 shadow-sm">
            {HOTEL_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-brand-beige mb-8 font-light max-w-2xl">
            {TAGLINE}
          </p>
          <div className="max-w-xl text-stone-200 mb-8 text-sm md:text-base hidden md:block">
            Escape the busy city life and unwind in our charming rustic cottage. 
            Enjoy nature, homemade food, and the peace of the countryside.
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-brand-green hover:bg-brand-cream hover:text-brand-green text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-brand-green"
          >
            Book Your Stay
          </button>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Homemade Breakfast", icon: "🍳" },
              { title: "Nature Surroundings", icon: "🌲" },
              { title: "High-Speed Wi-Fi", icon: "📶" },
              { title: "Personalized Service", icon: "🛎️" },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-lg font-bold text-brand-darkGreen">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-darkGreen mb-6">Welcome to Our Home</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Founded in 2010 by the Thompson family, Willow Creek Cottage began as a humble summer home and has blossomed into a beloved retreat for travelers worldwide. 
            We believe in slow living, good food, and warm hospitality. Whether you are here to hike the trails or curl up with a book by the fire, we promise a stay you won't forget.
          </p>
          <div className="w-16 h-1 bg-brand-green mx-auto rounded"></div>
        </div>
      </section>

      {/* Room Preview */}
      <section className="py-16 bg-brand-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-darkGreen">Our Rooms</h2>
              <p className="text-stone-600 mt-2">Designed for comfort and serenity.</p>
            </div>
            <button onClick={() => onNavigate('rooms')} className="hidden md:block text-brand-green font-bold hover:text-brand-darkGreen">
              View All Rooms &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room) => (
              <div key={room.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-brand-darkGreen mb-2">{room.name}</h3>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">{room.shortDescription}</p>
                  <button 
                    onClick={() => onNavigate('rooms')}
                    className="w-full border border-brand-green text-brand-green py-2 rounded hover:bg-brand-green hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <button onClick={() => onNavigate('rooms')} className="text-brand-green font-bold hover:text-brand-darkGreen">
              View All Rooms &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-darkGreen text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">Guest Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-brand-green mb-4 text-2xl">★★★★★</div>
                <p className="italic text-brand-beige mb-6">"{review.comment}"</p>
                <div className="font-bold font-serif">{review.name}</div>
                <div className="text-xs opacity-60 uppercase tracking-widest mt-1">{review.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;