
import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MicButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MicButton: React.FC<MicButtonProps> = ({ 
  size = 'md',
  className 
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMic = () => {
    setIsActive(!isActive);
    // Here we would typically handle actual microphone activation
  };

  const buttonSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <button
      className={cn(
        buttonSizes[size],
        "rounded-full flex items-center justify-center transition-all duration-300",
        isActive 
          ? "bg-red-500 text-white shadow-lg" 
          : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
        isActive && "animate-mic-pulse",
        className
      )}
      onClick={toggleMic}
    >
      {isActive ? (
        <MicOff className={iconSizes[size]} />
      ) : (
        <Mic className={iconSizes[size]} />
      )}
    </button>
  );
};

export default MicButton;
