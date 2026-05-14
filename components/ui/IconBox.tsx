import { type LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
}

const sizeStyles = { sm: "w-10 h-10", md: "w-12 h-12", lg: "w-16 h-16" };
const iconSizes = { sm: 18, md: 24, lg: 28 };
const variantStyles = {
  primary: "bg-primary/10 border-primary/20 text-primary",
  secondary: "bg-secondary/10 border-secondary/20 text-secondary",
};

export function IconBox({ icon: Icon, size = "md", variant = "primary", className = "" }: IconBoxProps) {
  return (
    <div className={`flex items-center justify-center rounded-xl border ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      <Icon size={iconSizes[size]} />
    </div>
  );
}
