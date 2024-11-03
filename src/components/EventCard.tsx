import { Calendar, MapPin, Users } from 'lucide-react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={event.coverImage} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
        <p className="mt-2 text-gray-600">{event.description}</p>
        <div className="mt-4 flex items-center text-gray-500">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            View Registry
          </button>
          <button className="text-indigo-600 hover:text-indigo-700">
            RSVP Now
          </button>
        </div>
      </div>
    </div>
  );
}