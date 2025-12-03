import React from 'react';
import { ROOMS } from '../constants';

interface RoomsProps {
  onNavigate: (page: string) => void;
}

const Rooms: React.FC<RoomsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-brand-beige/50 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-brand-darkGreen mb-4">Accommodations</h1>
        <p className="max-w-2xl mx-auto text-stone-600 px-4">
          Each of our rooms is uniquely decorated to reflect the charm of the countryside. 
          Enjoy modern amenities blended with rustic warmth.
        </p>
      </div>

      {/* Room List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {ROOMS.map((room, index) => (
          <div key={room.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl shadow-lg overflow-hidden`}>
            
            {/* Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
               <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex justify-between items-baseline mb-4">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-darkGreen">{room.name}</h2>
                <span className="text-brand-brown font-bold text-xl">${room.price}<span className="text-sm text-stone-400 font-normal">/night</span></span>
              </div>
              
              <p className="text-stone-600 mb-6 leading-relaxed">
                {room.description}
              </p>

              <div className="mb-8">
                <h3 className="font-serif font-bold text-brand-darkGreen mb-3 text-sm uppercase tracking-wide">Amenities</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-stone-600">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => onNavigate('contact')}
                className="self-start bg-brand-green text-white px-8 py-3 rounded hover:bg-brand-darkGreen transition-colors shadow-md font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Why Stay Section */}
      <div className="max-w-4xl mx-auto mt-24 px-4">
        <h2 className="font-serif text-3xl font-bold text-center text-brand-darkGreen mb-10">Why Stay With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Locally Sourced Organic Breakfast",
            "5-Minute Walk to Hiking Trails",
            "Eco-Friendly Toiletries",
            "Complimentary Afternoon Tea",
            "Pet Friendly (Selected Rooms)",
            "Private Parking Included"
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center bg-white p-4 rounded shadow-sm">
              <svg className="w-5 h-5 text-brand-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-stone-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Rooms;