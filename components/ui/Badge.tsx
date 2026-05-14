interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "outline";
  size?: "sm" | "md";
}

const variantStyles = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  outline: "bg-transparent text-foreground-muted border-white/10",
};

const sizeStyles = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-xs",
};

export function Badge({ children, variant = "primary", size = "md" }: BadgeProps) {
  return (
    <span className={`inline-block rounded-full font-medium border ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {children}
    </span>
  );
}
