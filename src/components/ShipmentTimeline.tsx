import React from 'react';
import { CheckCircle2, Circle, Clock, AlertTriangle } from 'lucide-react';

interface ShipmentEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  details: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface ShipmentTimelineProps {
  events: ShipmentEvent[];
}

const ShipmentTimeline: React.FC<ShipmentTimelineProps> = ({ events }) => {
  const getEventIcon = (event: ShipmentEvent) => {
    if (event.isCompleted) {
      return <CheckCircle2 size={24} className="text-green-500 dark:text-green-400" />;
    } else if (event.isCurrent) {
      return <Clock size={24} className="text-blue-500 dark:text-blue-400 animate-pulse" />;
    } else if (event.status.toLowerCase().includes('exception') || 
               event.status.toLowerCase().includes('failed')) {
      return <AlertTriangle size={24} className="text-red-500 dark:text-red-400" />;
    } else {
      return <Circle size={24} className="text-gray-400 dark:text-gray-500" />;
    }
  };

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span
                  className="absolute top-5 left-3 -ml-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  {getEventIcon(event)}
                </div>
                <div className={`min-w-0 flex-1 py-0 ${
                  event.isCurrent ? 'bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg' : ''
                }`}>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {event.status}
                    </div>
                    <div className="mt-1 text-gray-700 dark:text-gray-300">
                      {event.details}
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <span className="truncate">{event.location}</span>
                      <span className="mx-1">•</span>
                      <span>{event.date}</span>
                      <span className="mx-1">•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentTimeline;