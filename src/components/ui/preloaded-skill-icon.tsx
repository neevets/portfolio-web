import { memo } from 'react';
import { Icon } from '@/components/ui/icon';
import { IconName } from '@/components/icons';
import { cn } from '@/lib/utils';

interface PreloadedSkillIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PreloadedSkillIcon = memo<PreloadedSkillIconProps>(({ 
  name, 
  className = "w-full h-full",
  style
}) => {
  return (
    <Icon 
      name={name as IconName}
      className={cn(className)}
      style={style}
      fallback={<div className={cn(className, "bg-muted-foreground/20 rounded animate-pulse")} style={style} />}
    />
  );
});

PreloadedSkillIcon.displayName = 'PreloadedSkillIcon';