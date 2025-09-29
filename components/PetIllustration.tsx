import React from 'react';

interface PetIllustrationProps {
  type?: 'cat' | 'dog' | 'both';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PetIllustration: React.FC<PetIllustrationProps> = ({ 
  type = 'both', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  if (type === 'cat') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Gato laranja */}
          <circle cx="50" cy="40" r="18" fill="#FF8C42" />
          <path d="M32 30 L40 22 L38 36 Z" fill="#FF8C42" />
          <path d="M68 30 L60 22 L62 36 Z" fill="#FF8C42" />
          <circle cx="45" cy="36" r="2" fill="#2D4A3E" />
          <circle cx="55" cy="36" r="2" fill="#2D4A3E" />
          <path d="M48 42 L50 45 L52 42" stroke="#2D4A3E" strokeWidth="2" fill="none" />
          <path d="M50 45 Q45 48 40 46" stroke="#2D4A3E" strokeWidth="1" fill="none" />
          <path d="M50 45 Q55 48 60 46" stroke="#2D4A3E" strokeWidth="1" fill="none" />
          <ellipse cx="50" cy="65" rx="15" ry="20" fill="#FF8C42" />
          <ellipse cx="40" cy="78" rx="4" ry="8" fill="#FF8C42" />
          <ellipse cx="60" cy="78" rx="4" ry="8" fill="#FF8C42" />
          <path d="M65 70 Q75 75 70 85" stroke="#FF8C42" strokeWidth="4" fill="none" />
          <circle cx="47" cy="38" r="0.5" fill="white" />
          <circle cx="53" cy="38" r="0.5" fill="white" />
        </svg>
      </div>
    );
  }

  if (type === 'dog') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Cachorro marrom */}
          <ellipse cx="50" cy="42" rx="20" ry="16" fill="#D2691E" />
          <ellipse cx="35" cy="35" rx="6" ry="10" fill="#D2691E" />
          <ellipse cx="65" cy="35" rx="6" ry="10" fill="#D2691E" />
          <circle cx="44" cy="40" r="2" fill="#2D4A3E" />
          <circle cx="56" cy="40" r="2" fill="#2D4A3E" />
          <ellipse cx="50" cy="46" rx="3" ry="2" fill="#2D4A3E" />
          <path d="M50 48 Q45 52 42 50" stroke="#2D4A3E" strokeWidth="2" fill="none" />
          <path d="M50 48 Q55 52 58 50" stroke="#2D4A3E" strokeWidth="2" fill="none" />
          <ellipse cx="50" cy="68" rx="16" ry="22" fill="#D2691E" />
          <ellipse cx="38" cy="82" rx="4" ry="8" fill="#D2691E" />
          <ellipse cx="62" cy="82" rx="4" ry="8" fill="#D2691E" />
          <ellipse cx="50" cy="50" rx="3" ry="4" fill="#FF69B4" />
          <circle cx="46" cy="42" r="0.5" fill="white" />
          <circle cx="54" cy="42" r="0.5" fill="white" />
        </svg>
      </div>
    );
  }

  // both
  return (
    <div className={`flex ${sizeClasses[size]} ${className}`}>
      <PetIllustration type="cat" size={size} className="mr-2" />
      <PetIllustration type="dog" size={size} className="ml-2" />
    </div>
  );
};

export default PetIllustration;