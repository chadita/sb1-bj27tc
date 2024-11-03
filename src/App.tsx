import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import GiftCard from './components/GiftCard';

// Mock data
const featuredEvents = [
  {
    id: '1',
    title: 'Sarah & Mike\'s Wedding',
    date: '2024-08-15',
    type: 'Wedding',
    description: 'Join us for our special day at Sunset Gardens',
    theme: {
      primary: 'indigo',
      secondary: 'pink'
    },
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Emma\'s Baby Shower',
    date: '2024-05-20',
    type: 'Baby Shower',
    description: 'Celebrating our little bundle of joy',
    theme: {
      primary: 'blue',
      secondary: 'yellow'
    },
    coverImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'John\'s 30th Birthday',
    date: '2024-06-10',
    type: 'Birthday',
    description: 'Milestone celebration with friends and family',
    theme: {
      primary: 'green',
      secondary: 'gold'
    },
    coverImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80'
  }
];

const popularGifts = [
  {
    id: '1',
    name: 'KitchenAid Stand Mixer',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&q=80',
    store: 'Williams Sonoma',
    url: '#',
    reserved: false,
    contributors: []
  },
  {
    id: '2',
    name: 'Dyson V15 Vacuum',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80',
    store: 'Best Buy',
    url: '#',
    reserved: true,
    contributors: ['Alice', 'Bob', 'Charlie']
  },
  {
    id: '3',
    name: 'Le Creuset Dutch Oven',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80',
    store: 'Crate & Barrel',
    url: '#',
    reserved: false,
    contributors: []
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      
      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Popular Gifts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Gifts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularGifts.map(gift => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;