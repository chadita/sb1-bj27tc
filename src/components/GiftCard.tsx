import { ShoppingCart, Users } from 'lucide-react';
import type { Gift } from '../types';

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={gift.image} 
        alt={gift.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{gift.name}</h3>
          <span className="text-lg font-bold text-indigo-600">${gift.price}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{gift.store}</p>
        
        <div className="mt-4 space-y-2">
          {gift.reserved ? (
            <div className="flex items-center text-green-600">
              <Users className="h-5 w-5 mr-2" />
              <span>{gift.contributors.length} contributors</span>
            </div>
          ) : (
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Reserve Gift
            </button>
          )}
          
          <a 
            href={gift.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-indigo-600 hover:text-indigo-700 text-sm"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}