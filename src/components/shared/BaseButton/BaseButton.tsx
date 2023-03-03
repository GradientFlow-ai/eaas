import React from "react";
import Link from "next/link";
import BaseIcon from "./BaseIcon";

export type ColorButtonKey =
  | "white"
  | "whiteDark"
  | "lightDark"
  | "contrast"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "void";

type Props = {
  label?: string;
  icon?: JSX.Element;
  iconSize?: string | number;
  href?: string;
  target?: string;
  type?: string;
  color?: ColorButtonKey;
  className?: string;
  asAnchor?: boolean;
  small?: boolean;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  roundedFull?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export default function BaseButton({
  label,
  icon,
  iconSize,
  href,
  target,
  type,
  color = "white",
  className = "",
  asAnchor = false,
  small = false,
  outline = false,
  active = false,
  disabled = false,
  roundedFull = false,
  onClick,
}: Props) {
  const componentClass = [
    "inline-flex",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "focus:outline-none",
    "transition-colors",
    "focus:ring",
    "duration-150",
    "border",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    roundedFull ? "rounded-full" : "rounded",
    getButtonColor(color, outline, !disabled, active),
    className,
  ];

  if (!label && icon) {
    componentClass.push("p-1");
  } else if (small) {
    componentClass.push("text-sm", roundedFull ? "px-3 py-1" : "p-1");
  } else {
    componentClass.push("py-2", roundedFull ? "px-6" : "px-3");
  }

  if (disabled) {
    componentClass.push(outline ? "opacity-50" : "opacity-70");
  }

  const componentClassString = componentClass.join(" ");

  const componentChildren = (
    <>
      {icon && icon}
      {label && (
        <span className={small && icon ? "px-1" : "px-2"}>{label}</span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} target={target} className={componentClassString}>
        {componentChildren}
      </Link>
    );
  }

  return React.createElement(
    asAnchor ? "a" : "button",
    {
      className: componentClassString,
      type: type ?? "button",
      target,
      disabled,
      onClick,
    },
    componentChildren,
  );
}

export const getButtonColor = (
  color: ColorButtonKey,
  isOutlined: boolean,
  hasHover: boolean,
  isActive = false,
) => {
  if (color === "void") {
    return "";
  }

  const colors = {
    ring: {
      white: "ring-gray-200 dark:ring-gray-500",
      whiteDark: "ring-gray-200 dark:ring-gray-500",
      lightDark: "ring-gray-200 dark:ring-gray-500",
      contrast: "ring-gray-300 dark:ring-gray-400",
      success: "ring-emerald-300 dark:ring-emerald-700",
      danger: "ring-red-300 dark:ring-red-700",
      warning: "ring-yellow-300 dark:ring-yellow-700",
      info: "ring-blue-300 dark:ring-blue-700",
    },
    active: {
      white: "bg-gray-100",
      whiteDark: "bg-gray-100 dark:bg-slate-800",
      lightDark: "bg-gray-200 dark:bg-slate-700",
      contrast: "bg-gray-700 dark:bg-slate-100",
      success: "bg-emerald-700 dark:bg-emerald-600",
      danger: "bg-red-700 dark:bg-red-600",
      warning: "bg-yellow-700 dark:bg-yellow-600",
      info: "bg-blue-700 dark:bg-blue-600",
    },
    bg: {
      white: "bg-white text-black",
      whiteDark: "bg-white text-black dark:bg-slate-900 dark:text-white",
      lightDark: "bg-gray-100 text-black dark:bg-slate-800 dark:text-white",
      contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
      success: "bg-emerald-600 dark:bg-emerald-500 text-white",
      danger: "bg-red-600 dark:bg-red-500 text-white",
      warning: "bg-yellow-600 dark:bg-yellow-500 text-white",
      info: "bg-blue-600 dark:bg-blue-500 text-white",
    },
    bgHover: {
      white: "hover:bg-gray-100",
      whiteDark: "hover:bg-gray-100 hover:dark:bg-slate-800",
      lightDark: "hover:bg-gray-200 hover:dark:bg-slate-700",
      contrast: "hover:bg-gray-700 hover:dark:bg-slate-100",
      success:
        "hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",
      danger:
        "hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",
      warning:
        "hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",
      info:
        "hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600",
    },
    borders: {
      white: "border-white",
      whiteDark: "border-white dark:border-slate-900",
      lightDark: "border-gray-100 dark:border-slate-800",
      contrast: "border-gray-800 dark:border-white",
      success: "border-emerald-600 dark:border-emerald-500",
      danger: "border-red-600 dark:border-red-500",
      warning: "border-yellow-600 dark:border-yellow-500",
      info: "border-blue-600 dark:border-blue-500",
    },
    text: {
      contrast: "dark:text-slate-100",
      success: "text-emerald-600 dark:text-emerald-500",
      danger: "text-red-600 dark:text-red-500",
      warning: "text-yellow-600 dark:text-yellow-500",
      info: "text-blue-600 dark:text-blue-500",
    },
    outlineHover: {
      contrast:
        "hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",
      success:
        "hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",
      danger:
        "hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",
      warning:
        "hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",
      info:
        "hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600",
    },
  };

  const isOutlinedProcessed =
    isOutlined && ["white", "whiteDark", "lightDark"].indexOf(color) < 0;

  const base = [colors.borders[color], colors.ring[color]];

  if (isActive) {
    base.push(colors.active[color]);
  } else {
    base.push(
      isOutlinedProcessed ? (colors.text as any)[color] : colors.bg[color],
    );
  }

  if (hasHover) {
    base.push(
      isOutlinedProcessed
        ? (colors.outlineHover as any)[color]
        : colors.bgHover[color],
    );
  }

  return base.join(" ");
};
