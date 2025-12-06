import { memo } from 'react';
import { iconMap, IconName } from '@/components/icons';
import { cn } from '@/lib/utils';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  fallback?: React.ReactNode;
}

const IconSkeleton = ({ className }: { className?: string }) => (
  <div 
    className={cn(
      "animate-pulse bg-muted-foreground/20 rounded-sm",
      className
    )}
    role="img"
    aria-label="Loading icon"
  />
);

export const Icon = memo<IconProps>(({ 
  name, 
  className = "w-full h-full", 
  size,
  style,
  fallback
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return fallback || <IconSkeleton className={className} />;
  }

  const sizeStyle = size ? { width: size, height: size } : {};
  const combinedStyle = { ...sizeStyle, ...style };

  return (
    <div 
      className={cn("flex items-center justify-center", className)}
      style={combinedStyle}
    >
      <IconComponent />
    </div>
  );
});

Icon.displayName = 'Icon';