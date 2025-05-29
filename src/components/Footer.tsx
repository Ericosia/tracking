import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white-900 text-white pt-16 pb-8">
 

        
        <div className="border-t  mt-12 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-sm " >
                    &copy; {new Date().getFullYear()} World Express. Powered by ColiTrack.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;