import React from 'react';
import { Package, Globe, Clock, ShieldCheck, Box, Truck, CheckCircle2, AlertTriangle } from 'lucide-react';
import TrackingForm from './TrackingForm';
import TrackingDetails from './TrackingDetails';
import LoadingOverlay from './LoadingOverlay';

interface HeroProps {
  onTrackingSubmit: (trackingNumber: string) => void;
  isLoading: boolean;
}

const Hero: React.FC<HeroProps> = ({ onTrackingSubmit, isLoading }) => {
  // Sample tracking events data for demonstration
  const trackingEvents = [
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
    <div className="relative min-h-screen flex flex-col">
      {isLoading && <LoadingOverlay />}
      
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTVEQUQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6TTE0IDE0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-100 dark:opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center flex-grow">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-red-600 text-red-500">Suivez</span> votre colis en toute <span className="text-blue-400">Confiance</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Expédition rapide et fiable dans le monde entier avec suivi en temps réel et mises à jour de livraison pour vos colis importants.
          </p>

          <TrackingDetails 
            trackingNumber="yal-DXVD73"
            status="livre"
            events={trackingEvents}
          />

          <div className="w-full max-w-md mx-auto">
            <TrackingForm onTrackingSubmit={onTrackingSubmit} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;