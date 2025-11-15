"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    setScrollDir(direction);
    lastScrollY.current = latest;

    // Show shrunken navbar after scrolling past threshold
    // When at very top (0-50px), always show unshrunk version
    if (latest <= 50) {
      setVisible(false);
    } else {
      setVisible(latest > 100);
    }
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        y: visible && scrollDir === "down" ? -100 : 0, // Hide when scrolling down (but not at top)
        opacity: visible && scrollDir === "down" ? 0 : 1, // Fade out when hiding
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.2 },
      }}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,1)", // Solid white at top
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset", // Same shadow at top
        width: visible ? "95%" : "100%",
        maxWidth: visible ? "1000px" : "100%", // Full width at top
        y: visible ? 10 : 0, // No offset at top
        paddingTop: visible ? "8px" : "16px",
        paddingBottom: visible ? "8px" : "16px",
        borderRadius: visible ? "50px" : "12px", // Slight rounding at top
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between px-8 lg:flex",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-20 font-medium">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,1)", // Solid white at top
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset", // Same shadow at top
        width: visible ? "95%" : "100%",
        paddingRight: visible ? "16px" : "16px",
        paddingLeft: visible ? "16px" : "16px",
        paddingTop: visible ? "8px" : "12px",
        paddingBottom: visible ? "8px" : "12px",
        borderRadius: visible ? "50px" : "12px", // Slight rounding at top
        y: visible ? 10 : 0, // No offset at top
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
    >
      {isOpen ? (
        <IconX className="text-black dark:text-white w-6 h-6" />
      ) : (
        <IconMenu2 className="text-black dark:text-white w-6 h-6" />
      )}
    </button>
  );
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <motion.a
      href="#"
      className="relative z-20 flex items-center space-x-2 text-sm font-normal"
      animate={{
        scale: visible ? 0.85 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <img
        src="/mendiv.png"
        alt="logo"
        className="h-auto w-auto max-h-10 max-w-[160px]"
      />
    </motion.a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  visible,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  visible?: boolean;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "rounded-full bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center border-none outline-none";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-green-500 to-green-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:from-green-600 hover:to-green-700",
  };

  return (
    <motion.div
      animate={{
        paddingLeft: visible ? "16px" : "20px",
        paddingRight: visible ? "16px" : "20px",
        paddingTop: visible ? "8px" : "12px",
        paddingBottom: visible ? "8px" : "12px",
        fontSize: visible ? "0.875rem" : "0.9375rem",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Tag
        href={href || undefined}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
