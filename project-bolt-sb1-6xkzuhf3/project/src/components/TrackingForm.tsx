import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface TrackingFormProps {
  onTrackingSubmit: (trackingNumber: string) => void;
  isLoading: boolean;
}

const TrackingForm: React.FC<TrackingFormProps> = ({ onTrackingSubmit, isLoading }) => {

};

export default TrackingForm;