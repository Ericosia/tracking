import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShipmentDetails from './components/ShipmentDetails';
import Footer from './components/Footer';
import { getShipmentDetails } from './utils/trackingService';
import { Shipment } from './types';
import TrackingPage from './components/TrackingPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check user's preferred color scheme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply dark mode class to document


  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
   
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const handleTrackingSubmit = async (number: string) => {
    setTrackingNumber(number);
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getShipmentDetails(number);
      if (result) {
        setShipment(result);
      } else {
        setError(`No shipment found with tracking number: ${number}`);
        setShipment(null);
      }
    } catch (err) {
      setError('An error occurred while fetching shipment details. Please try again.');
      setShipment(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      
      <main className="flex-grow">
        {!shipment && !error && (
          <Hero onTrackingSubmit={handleTrackingSubmit} isLoading={isLoading} />
        )}
        
        {isLoading && (
          <div className="container mx-auto px-4 py-16 flex justify-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-lg">Loading shipment details...</p>
            </div>
          </div>
        )}
        
        {error && !isLoading && (
          <div className="container mx-auto px-4 py-32 flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Tracking Error</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
        
        {shipment && !isLoading && !error && (
          <div className="container mx-auto px-4 py-32">
            <ShipmentDetails shipment={shipment} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );

  return <TrackingPage />;
}

export default App;