import React from "react";

import BaseIcon from "./BaseIcon";

export type ColorKey =
  | "white"
  | "light"
  | "contrast"
  | "success"
  | "danger"
  | "warning"
  | "info";

export const colorsBgLight = {
  white: "bg-white text-black",
  light: "bg-white text-black dark:bg-slate-900/70 dark:text-white",
  contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
  success: "bg-emerald-500 border-emerald-500 text-white",
  danger: "bg-red-500 border-red-500 text-white",
  warning: "bg-yellow-500 border-yellow-500 text-white",
  info: "bg-blue-500 border-blue-500 text-white",
};

export const colorsText = {
  white: "text-black dark:text-slate-100",
  light: "text-gray-700 dark:text-slate-400",
  contrast: "dark:text-white",
  success: "text-emerald-500",
  danger: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

type Props = {
  icon: JSX.Element;
  color: ColorKey;
  w?: string;
  h?: string;
  bg?: boolean;
  className?: string;
};

export default function IconRounded({
  icon,
  color,
  w = "w-12",
  h = "h-12",
  bg = false,
  className = "",
}: Props) {
  const classAddon = bg
    ? colorsBgLight[color]
    : `${colorsText[color]} bg-gray-50 dark:bg-slate-800`;

  return (
    <BaseIcon
      icon={icon}
      w={w}
      h={h}
      className={`rounded-full ${classAddon} ${className}`}
    />
  );
}
