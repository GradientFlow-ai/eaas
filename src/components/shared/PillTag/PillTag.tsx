import React from "react";
import PillTagPlain from "./PillTagPlain";

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

export const colorsOutline = {
  white: [colorsText.white, "border-gray-100"].join(" "),
  light: [colorsText.light, "border-gray-100"].join(" "),
  contrast: [colorsText.contrast, "border-gray-900 dark:border-slate-100"].join(
    " ",
  ),
  success: [colorsText.success, "border-emerald-500"].join(" "),
  danger: [colorsText.danger, "border-red-500"].join(" "),
  warning: [colorsText.warning, "border-yellow-500"].join(" "),
  info: [colorsText.info, "border-blue-500"].join(" "),
};

export type ColorKey =
  | "white"
  | "light"
  | "contrast"
  | "success"
  | "danger"
  | "warning"
  | "info";

type Props = {
  label?: string;
  color: ColorKey;
  icon?: JSX.Element;
  small?: boolean;
  outline?: boolean;
  className?: string;
};

const PillTag = ({
  small = false,
  outline = false,
  className = "",
  ...props
}: Props) => {
  const layoutClassName = small ? "py-1 px-3" : "py-1.5 px-4";
  const colorClassName = outline
    ? colorsOutline[props.color]
    : colorsBgLight[props.color];

  return (
    <PillTagPlain
      className={`rounded-full border ${layoutClassName} ${colorClassName} ${className}`}
      icon={props.icon}
      label={props.label}
      small={small}
    />
  );
};

export default PillTag;
