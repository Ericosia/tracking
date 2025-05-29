import React from 'react';
import { Package, MapPin, Calendar, Truck, Info, CheckCircle2, Clock } from 'lucide-react';
import ShipmentMap from './ShipmentMap';
import ShipmentTimeline from './ShipmentTimeline';

interface ShipmentEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  details: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface Shipment {
  trackingNumber: string;
  status: 'in-transit' | 'delivered' | 'processing' | 'exception';
  service: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  events: ShipmentEvent[];
}

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({ shipment }) => {
  const getStatusColor = () => {
    switch (shipment.status) {
      case 'delivered':
        return 'text-green-600 dark:text-green-400';
      case 'in-transit':
        return 'text-blue-600 dark:text-blue-400';
      case 'processing':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'exception':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusIcon = () => {
    switch (shipment.status) {
      case 'delivered':
        return <CheckCircle2 className="text-green-600 dark:text-green-400" />;
      case 'in-transit':
        return <Truck className="text-blue-600 dark:text-blue-400" />;
      case 'processing':
        return <Clock className="text-yellow-600 dark:text-yellow-400" />;
      case 'exception':
        return <Info className="text-red-600 dark:text-red-400" />;
      default:
        return <Package className="text-gray-600 dark:text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (shipment.status) {
      case 'delivered':
        return 'Delivered';
      case 'in-transit':
        return 'In Transit';
      case 'processing':
        return 'Processing';
      case 'exception':
        return 'Exception';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="animate-fadeIn bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Tracking Number</h2>
            <p className="text-lg text-white/90 font-mono mt-1">{shipment.trackingNumber}</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center bg-white/10 px-4 py-2 rounded-lg">
            {getStatusIcon()}
            <span className={`ml-2 font-semibold ${getStatusColor()}`}>{getStatusText()}</span>
          </div>
        </div>
      </div>

      {/* Shipment Overview */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="mt-1 mr-3 text-gray-500 dark:text-gray-400" size={20} />
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Estimated Delivery</h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{shipment.estimatedDelivery}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Package className="mt-1 mr-3 text-gray-500 dark:text-gray-400" size={20} />
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Service</h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{shipment.service}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mt-1 mr-3 text-gray-500 dark:text-gray-400" size={20} />
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">From</h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{shipment.origin}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="mt-1 mr-3 text-gray-500 dark:text-gray-400" size={20} />
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">To</h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{shipment.destination}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="p-6 pt-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shipment Location</h3>
        <div className="h-64 md:h-72 rounded-lg overflow-hidden">
          <ShipmentMap 
            origin={shipment.origin}
            destination={shipment.destination}
            currentLocation={shipment.events[0]?.location || ''}
          />
        </div>
      </div>
      
      {/* Timeline */}
      <div className="p-6 pt-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shipment History</h3>
        <ShipmentTimeline events={shipment.events} />
      </div>
    </div>
  );
};

export default ShipmentDetails;