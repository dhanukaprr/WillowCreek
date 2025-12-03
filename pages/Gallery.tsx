import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = ['all', 'interior', 'exterior', 'food', 'nature'];

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-darkGreen py-16 text-center text-brand-cream">
        <h1 className="font-serif text-4xl font-bold mb-2">Gallery</h1>
        <p className="opacity-80">A glimpse into life at the cottage.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                filter === cat 
                  ? 'bg-brand-green text-white shadow-md' 
                  : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item: GalleryItem) => (
            <div key={item.id} className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.caption} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-serif tracking-wide text-sm">{item.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;