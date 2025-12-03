import { Room, Review, GalleryItem } from './types';

export const HOTEL_NAME = "Willow Creek Cottage";
export const TAGLINE = "Your Cozy Countryside Escape";
export const PHONE_NUMBER = "+1 (555) 123-4567";
export const EMAIL_ADDRESS = "stay@willowcreekcottage.com";
export const ADDRESS = "123 Mossy Lane, Highland Hills, VT 05401";

export const ROOMS: Room[] = [
  {
    id: 'garden-suite',
    name: 'Garden View Suite',
    shortDescription: 'A bright, airy room with direct access to our flower gardens.',
    description: 'Wake up to the sound of birds and the scent of blooming jasmine. Our Garden View Suite features a plush queen-sized bed, a private patio, and a vintage clawfoot tub.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
    amenities: ['Queen Bed', 'Ensuite Bathroom', 'Garden Patio', 'Free Wi-Fi', 'Homemade Breakfast']
  },
  {
    id: 'attic-loft',
    name: 'The Attic Loft',
    shortDescription: 'Cozy and rustic charm tucked away under the eaves.',
    description: 'Perfect for a romantic getaway, the Attic Loft features exposed wooden beams, a cozy reading nook, and skylights for stargazing.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    amenities: ['Double Bed', 'Skylights', 'Rain Shower', 'Coffee/Tea Station', 'Free Wi-Fi']
  },
  {
    id: 'creekside-cabin',
    name: 'Creekside Cottage',
    shortDescription: 'A detached unit for extra privacy right by the water.',
    description: 'Our premium offering. A standalone cottage offering ultimate privacy, a small kitchenette, and a wraparound porch listening to the bubbling creek.',
    price: 185,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800',
    amenities: ['King Bed', 'Kitchenette', 'Private Porch', 'Fireplace', 'Luxury Linens']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Sarah M.',
    date: 'October 2023',
    comment: 'An absolute gem! The breakfast was divine and the hosts made us feel like family. The garden suite was spotless and so relaxing.',
    rating: 5
  },
  {
    id: 'r2',
    name: 'James & Emily',
    date: 'September 2023',
    comment: 'We stayed in the Attic Loft for our anniversary. It was magical. Highly recommend taking a morning walk by the creek.',
    rating: 5
  },
  {
    id: 'r3',
    name: 'Michael T.',
    date: 'August 2023',
    comment: 'Peaceful, quiet, and exactly what I needed to disconnect. The Wi-Fi was good enough for emails, but you won\'t want to be on your phone here.',
    rating: 4
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800',
    caption: 'Front Porch at Sunset',
    category: 'exterior'
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1616594039964-40891a909d72?auto=format&fit=crop&q=80&w=800',
    caption: 'Cozy Reading Nook',
    category: 'interior'
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=800',
    caption: 'Fresh Homemade Breakfast',
    category: 'food'
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    caption: 'Garden Blooms',
    category: 'nature'
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    caption: 'Master Bedroom',
    category: 'interior'
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1565881606991-789a8837240d?auto=format&fit=crop&q=80&w=800',
    caption: 'Evening by the Fire',
    category: 'interior'
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    caption: 'Surrounding Hills',
    category: 'nature'
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&q=80&w=800',
    caption: 'Coffee on the Patio',
    category: 'food'
  }
];