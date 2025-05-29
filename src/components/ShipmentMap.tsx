import React from 'react';
import { MapPin } from 'lucide-react';

interface ShipmentMapProps {
  origin: string;
  destination: string;
  currentLocation: string;
}

const ShipmentMap: React.FC<ShipmentMapProps> = ({ origin, destination, currentLocation }) => {
  // In a real app, we would use a mapping API like Google Maps, Mapbox, or Leaflet
  // For this demo, we'll create a stylized representation
  
  return (
    <div className="relative w-full h-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
      {/* Stylized Map Background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-50 dark:opacity-30"></div>
      
      {/* Map Route Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600">
        <div className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-400" style={{ width: '60%' }}></div>
      </div>
      
      {/* Origin Pin */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -translate-x-1/2 text-red-600 dark:text-red-500">
        <div className="relative">
          <MapPin size={28} />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium shadow">
            {origin}
          </div>
        </div>
      </div>
      
      {/* Current Location */}
      <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-400">
        <div className="relative animate-bounce">
          <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-200 dark:ring-blue-800"></div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-600 dark:bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium shadow max-w-[140px] truncate">
            {currentLocation}
          </div>
        </div>
      </div>
      
      {/* Destination Pin */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 translate-x-1/2 text-red-600 dark:text-red-500">
        <div className="relative">
          <MapPin size={28} />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium shadow">
            {destination}
          </div>
        </div>
      </div>
      
      {/* Map Controls (Decorative) */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center text-gray-700 dark:text-gray-300">+</button>
        <button className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center text-gray-700 dark:text-gray-300">−</button>
      </div>
    </div>
  );
};

export default ShipmentMap;