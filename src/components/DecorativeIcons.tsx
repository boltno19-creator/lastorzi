import { Crown, Watch, Scissors, Star, Sparkles, Diamond } from 'lucide-react';

interface DecorativeIconProps {
  icon: 'crown' | 'watch' | 'scissors' | 'star' | 'sparkles' | 'diamond';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
}

export default function DecorativeIcon({ icon, position, delay = 0 }: DecorativeIconProps) {
  const iconMap = {
    crown: Crown,
    watch: Watch,
    scissors: Scissors,
    star: Star,
    sparkles: Sparkles,
    diamond: Diamond,
  };

  const IconComponent = iconMap[icon];

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...position,
        animation: `floatIcon 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <IconComponent
        size={16}
        className="text-[#243247]"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
}
