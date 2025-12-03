import React, { useState } from 'react';
import { ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS, ROOMS } from '../constants';
import { BookingFormData } from '../types';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: ROOMS[0].id,
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Booking Request:", formData);
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-stone-200 py-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-brand-darkGreen">Contact & Booking</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-darkGreen mb-4">Get In Touch</h2>
              <p className="text-stone-600 mb-6">
                Have questions about your stay? Feel free to reach out to us directly or use the form to request a reservation.
              </p>
              
              <div className="space-y-4 text-stone-700">
                <div className="flex items-start">
                  <span className="font-bold w-24 text-brand-green">Address:</span>
                  <span>{ADDRESS}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold w-24 text-brand-green">Phone:</span>
                  <span>{PHONE_NUMBER}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold w-24 text-brand-green">Email:</span>
                  <span>{EMAIL_ADDRESS}</span>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="bg-stone-300 w-full h-64 rounded-lg flex items-center justify-center text-stone-500 font-bold shadow-inner">
              Google Maps Placeholder
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-beige">
              <p className="text-sm text-stone-500 italic">
                "We pride ourselves on quick responses. You can expect to hear back from us within 24 hours."
              </p>
            </div>
          </div>

          {/* Booking Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-brand-green">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-darkGreen mb-2">Request Received!</h3>
                <p className="text-stone-600">Thank you, {formData.fullName}. We will contact you shortly at {formData.email} to confirm your stay.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-green font-semibold underline hover:text-brand-darkGreen"
                >
                  Make another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-bold text-brand-darkGreen mb-6">Request Booking</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        name="checkIn"
                        required
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none text-stone-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        name="checkOut"
                        required
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none text-stone-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Guests</label>
                      <select 
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none bg-white"
                      >
                        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Room Preference</label>
                      <select 
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none bg-white"
                      >
                        {ROOMS.map(room => (
                          <option key={room.id} value={room.id}>{room.name} (${room.price})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Special Requests</label>
                    <textarea 
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-brand-green outline-none"
                      placeholder="Dietary restrictions, late check-in, etc."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-green text-white font-bold py-3 rounded hover:bg-brand-darkGreen transition-colors shadow-lg mt-2"
                  >
                    Request Booking
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;