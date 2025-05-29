export type DeliveryStatus = 'livre' | 'en_cours' | 'echec';

export interface DeliveryAttempt {
  reason: string;
  timestamp: string;
}

export interface TrackingEvent {
  type: string;
  title: string;
  description: string;
  timestamp: string;
  location: string;
  attempts?: DeliveryAttempt[];
}