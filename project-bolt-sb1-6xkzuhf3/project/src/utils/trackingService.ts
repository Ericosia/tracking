import { mockData } from '../data/mockData';
import { Shipment } from '../types';

// Simulate an API call with a delay
export const getShipmentDetails = (trackingNumber: string): Promise<Shipment | null> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const shipment = mockData.shipments[trackingNumber];
      resolve(shipment || null);
    }, 1500); // 1.5 second delay to simulate API call
  });
};