import React from 'react';
import { DeliveryStatus } from '../types/tracking';

interface StatusBadgeProps {
  status: DeliveryStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'livre':
        return 'bg-green-100 text-green-800';
      case 'en_cours':
        return 'bg-blue-100 text-[#1e3a8a]';
      case 'echec':
        return 'bg-red-100 text-[#dc2626]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'livre':
        return 'Livré';
      case 'en_cours':
        return 'En cours';
      case 'echec':
        return 'Échec';
      default:
        return 'Inconnu';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles()}`}>
      {getStatusText()}
    </span>
  );
};

export default StatusBadge;