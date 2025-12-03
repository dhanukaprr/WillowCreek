export interface Room {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  amenities: string[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  comment: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  category: 'interior' | 'exterior' | 'food' | 'nature';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  specialRequests: string;
}