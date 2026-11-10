import { memo } from "react";
import { iconMap, type IconName } from "@/components/icons/icon-map";
import { cn } from "@/lib/utils";

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon = memo<IconProps>(({ name, className = "w-full h-full" }) => {
  const IconComponent = iconMap[name];

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <IconComponent />
    </div>
  );
});

Icon.displayName = "Icon";
