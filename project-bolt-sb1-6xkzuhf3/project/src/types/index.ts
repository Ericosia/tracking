export interface ShipmentEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  details: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface Shipment {
  trackingNumber: string;
  status: 'in-transit' | 'delivered' | 'processing' | 'exception';
  service: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  events: ShipmentEvent[];
}

export interface MockData {
  shipments: Record<string, Shipment>;
}

// Detailed tracking statuses
export type ShipmentStatus = 
  | 'in-preparation'      // En préparation
  | 'shipped'            // Expédié
  | 'to-wilaya'          // Vers Wilaya
  | 'received-wilaya'    // Reçu à Wilaya
  | 'distribution-center' // Centre
  | 'delivery-failed'    // Échec livraison
  | 'delivered'          // Livré
  | 'returning'          // Retour en cours
  | 'returned'           // Retourné
  | 'cancelled'          // Annulé
  | 'on-hold'            // En attente;

export type DeliveryAttemptResult = 
  | 'no-response'           // Client ne répond pas
  | 'address-not-found'     // Adresse introuvable
  | 'customer-unavailable'  // Client non disponible
  | 'customer-refused'      // Client a refusé
  | 'rescheduled'          // Reporté à la demande du client
  | 'wrong-address'         // Mauvaise adresse;

export interface DeliveryAttempt {
  date: string;
  time: string;
  result: DeliveryAttemptResult;
  notes?: string;
}

export interface ShipmentStep {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: ShipmentStatus;
  deliveryAttempts?: DeliveryAttempt[];
  isIssue?: boolean;
}