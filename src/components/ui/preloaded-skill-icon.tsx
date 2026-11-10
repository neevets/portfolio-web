import { memo } from 'react';
import { Icon } from '@/components/ui/icon';
import type { IconName } from '@/components/icons';
import { cn } from '@/lib/utils';

interface PreloadedSkillIconProps {
  name: IconName;
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
      name={name}
      className={cn(className)}
      style={style}
      fallback={<div className={cn(className, "bg-muted-foreground/20 rounded animate-pulse")} style={style} />}
    />
  );
});

PreloadedSkillIcon.displayName = 'PreloadedSkillIcon';