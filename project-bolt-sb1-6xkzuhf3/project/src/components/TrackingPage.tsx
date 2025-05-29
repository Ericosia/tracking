import React, { useState, useEffect } from 'react';
import TrackingDetails from './TrackingDetails';
import LoadingOverlay from './LoadingOverlay';
import { TrackingEvent } from '../types/tracking';

const TrackingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Sample tracking events data
  const trackingEvents: TrackingEvent[] = [
    {
      type: 'livre',
      title: 'Livré',
      description: 'Votre colis a été livré',
      timestamp: '2025-02-27 10:11:20',
      location: 'Agence de Skikda Faubourg [Guepex] Skikda Skikda'
    },
    {
      type: 'echec',
      title: 'Échec livraison',
      description: 'La livraison a échoué',
      timestamp: '2025-02-27 09:14:03',
      location: 'Agence de Skikda Faubourg [Guepex] Skikda Skikda',
      attempts: [
        {
          reason: 'Client ne répond pas',
          timestamp: '2025-02-27 09:14:03'
        },
        {
          reason: 'Client ne répond pas',
          timestamp: '2025-02-27 09:30:02'
        }
      ]
    },
    {
      type: 'centre',
      title: 'Centre',
      description: 'Votre colis est arrivé au centre de distribution',
      timestamp: '2025-02-27 03:01:47',
      location: 'Agence de Skikda Faubourg [Guepex] Skikda Skikda'
    },
    {
      type: 'echec',
      title: 'Échec livraison',
      description: 'La livraison a échoué',
      timestamp: '2025-02-26 10:49:04',
      location: 'Agence de Skikda Faubourg [Guepex] Skikda Skikda',
      attempts: [
        {
          reason: 'Téléphone injoignable',
          timestamp: '2025-02-26 10:49:04'
        },
        {
          reason: 'Téléphone injoignable',
          timestamp: '2025-02-26 11:05:03'
        }
      ]
    },
    {
      type: 'centre',
      title: 'Centre',
      description: 'Votre colis est arrivé au centre de distribution',
      timestamp: '2025-02-26 10:09:32',
      location: 'Agence de Skikda Faubourg [Guepex] Skikda Skikda'
    },
    {
      type: 'transfert',
      title: 'Transfert',
      description: 'Votre colis est en cours de transfert entre les centres',
      timestamp: '2025-02-26 07:50:09',
      location: 'Hub de Skikda [Yalidine] Skikda Skikda'
    },
    {
      type: 'centre',
      title: 'Centre',
      description: 'Votre colis est arrivé au centre de distribution',
      timestamp: '2025-02-26 07:35:57',
      location: 'Hub de Skikda [Yalidine] Skikda Skikda'
    },
    {
      type: 'transfert',
      title: 'Transfert',
      description: 'Votre colis est en cours de transfert entre les centres',
      timestamp: '2025-02-26 04:10:38',
      location: 'Centre Ali Mendjeli [HUB] [Yalidine] El Khroub Constantine'
    },
    {
      type: 'recu_wilaya',
      title: 'Reçu à Wilaya',
      description: 'Votre colis est arrivé dans votre wilaya',
      timestamp: '2025-02-26 04:04:37',
      location: 'Centre Ali Mendjeli [HUB] [Yalidine] El Khroub Constantine'
    },
    {
      type: 'vers_wilaya',
      title: 'Vers Wilaya',
      description: 'Votre colis est en route vers votre wilaya',
      timestamp: '2025-02-25 22:06:04',
      location: 'Agence de Oued Smar [Yalidine] Oued Smar Alger'
    },
    {
      type: 'expedie',
      title: 'Expédié',
      description: 'Votre colis a été expédié',
      timestamp: '2025-02-25 21:00:38',
      location: 'Agence de Oued Smar [Yalidine] Oued Smar Alger'
    },
    {
      type: 'preparation',
      title: 'En préparation',
      description: 'Votre colis est en cours de préparation pour l\'expédition.',
      timestamp: '2025-02-25 18:36:03',
      location: 'null null null'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-8 px-4 relative">
      {isLoading && <LoadingOverlay />}
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <div className="w-[800px] h-[800px] bg-[#1e3a8a] rounded-full flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-red-500 rounded-full -ml-[400px]" />
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mb-8 text-center relative">
        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">Suivre votre envoi</h1>
        <p className="text-gray-600">
          Entrez votre numéro de suivi pour obtenir des mises à jour en temps réel
        </p>
      </div>
      
      <TrackingDetails 
        trackingNumber="yal-DXVD73"
        status="livre"
        events={trackingEvents}
      />
    </div>
  );
};

export default TrackingPage;