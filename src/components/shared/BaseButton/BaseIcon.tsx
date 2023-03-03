import React, { ReactNode, cloneElement } from "react";
import Image from "next/image";

type Props = {
  icon: JSX.Element;
  w?: string;
  h?: string;
  className?: string;
};

export default function BaseIcon({
  icon,
  w = "w-6",
  h = "h-6",
  className = "",
}: Props) {
  const iconSize = 24;
  return (
    <span
      className={`inline-flex items-center justify-center ${w} ${h} ${className}`}
    >
      {cloneElement(icon, {
        viewBox: "0 0 24 24",
        width: { iconSize },
        height: { iconSize },
        className: "inline-block",
      })}
    </span>
  );
}
