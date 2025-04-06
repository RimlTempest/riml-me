import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
  icon?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const Button = ({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto";
  
  const variantStyles = {
    primary: "border-transparent bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc]",
    secondary: "border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
  };

  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && (
        <Image
          className="dark:invert"
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      )}
      {children}
    </a>
  );
}; 