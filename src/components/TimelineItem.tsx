import React from 'react';
import { DeliveryAttempt } from '../types/tracking';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  timestamp: string;
  location?: string;
  isLast: boolean;
  attempts?: DeliveryAttempt[];
  type: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  description,
  timestamp,
  location,
  isLast,
  attempts,
  type
}) => {
  const isFailure = type === 'echec';
  const isDelivered = type === 'livre';
  
  return (
    <div className="relative pb-24">
      {!isLast && ( 
        <div  
          className={`absolute left-6 -ml-px w-0.5 ${
            isFailure ? 'h-60 bg-red-300 top-12' : 'h-16 bg-[#1b0969] top-12 ' 
          }`} 
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-start space-x-3">
        <div className={`relative ${
          isFailure ? 'bg-red-100' : isDelivered ? 'bg-[#DCFCE7]' : 'bg-[#E0E7FF]'
        } rounded-full p-1 flex h-12 w-12 items-center justify-center`}>
          <div className={`${isFailure ? 'text-red-500' : isDelivered ? 'text-green-500':   'text-[#1b0969]'}`}> 
            {icon}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div> 
            <h3 className={`text-lg font-medium text-left ${
              isFailure ? 'text-red-600' : 'text-[#1e3a8a]' 
            }`}>
              {title}
            </h3>
            <p className="text-sm text-gray-600 text-left">{description}</p>
          </div>
          
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <span>{timestamp}</span>
            {location && location !== 'null null null' && (
              <>
                <span className="mx-3">•</span>
                <span>{location}</span>
              </>
            )}
          </div>

          {attempts && attempts.length > 0 && (
            <div className="mt-2">
              {attempts.map((attempt, index) => (
                <div 
                  key={index} 
                  className="bg-red-50 border border-red-100 rounded-md p-3 mt-2"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-left">
                      <h3 className="text-sm font-medium text-red-800">Tentative de livraison</h3>
                      <div className="mt-1 text-sm text-red-700">
                        <p>{attempt.reason}</p>
                      </div>
                      <div className="mt-1 text-xs text-red-500">
                        {attempt.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;