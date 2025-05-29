import React from 'react';
import { Package, Truck, MapPin, Building, AlertTriangle, CheckCircle } from 'lucide-react';
import TimelineItem from './TimelineItem';
import { DeliveryStatus, TrackingEvent } from '../types/tracking';
import StatusBadge from './StatusBadge';

interface TrackingDetailsProps {
  trackingNumber: string;
  status: DeliveryStatus;
  events: TrackingEvent[];
}

const TrackingDetails: React.FC<TrackingDetailsProps> = ({ 
  trackingNumber, 
  status,
  events 
}) => {
  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'preparation':
        return <Package className="h-5 w-5" />;
      case 'expedie':
        return <Package className="h-5 w-5" />;
      case 'vers_wilaya':
        return <Truck className="h-5 w-5" />;
      case 'recu_wilaya':
        return <MapPin className="h-5 w-5" />;
      case 'transfert':
        return <Truck className="h-5 w-5" />;
      case 'centre':
        return <Building className="h-5 w-5" />;
      case 'echec':
        return <AlertTriangle className="h-5 w-5" />;
      case 'livre':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  }; 

  return (
    <div className="max-w-3xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
  <div className="flex flex-col">
    <h2 className="text-xl font-bold text-[#1e3a8a] tracking-tight self-start">Détails du suivi</h2>
    <p className="text-sm text-gray-700 tracking-normal self-start">Numéro de suivi: {trackingNumber}</p>
  </div> 
  <StatusBadge status={status} />
</div>

      <div className="h-2 bg-gray-100 rounded-full mb-8">
        <div 
          className={`h-full rounded-full ${
            status === 'livre' 
              ? 'bg-green-500' 
              : status === 'echec' 
                ? 'bg-red-500'
                : 'bg-[#eee]'
          }`}
          style={{ width: status === 'livre' ? '100%' : '75%' }} 
        />
      </div>

      <div className="relative">
        {events.map((event, index) => (
          <TimelineItem
            key={`${event.type}-${index}`}
            icon={getStatusIcon(event.type)}
            title={event.title}
            description={event.description}
            timestamp={event.timestamp}
            location={event.location}
            isLast={index === events.length - 1}
            attempts={event.attempts}
            type={event.type}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackingDetails;