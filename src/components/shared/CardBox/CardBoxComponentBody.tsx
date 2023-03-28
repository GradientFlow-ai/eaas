import React, { ReactNode } from "react";

type Props = {
  noPadding?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function CardBoxComponentBody({
  noPadding = false,
  className,
  children,
}: Props) {
  return (
    <div className={`flex-1 ${noPadding ? "" : "p-6"} ${className}`}>
      {children}
    </div>
  );
}

const CardBox = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
      <span className="font-mono font-semibold">nFormatter</span>
      <span className="font-mono font-semibold">capitalize</span>
      <span className="font-mono font-semibold">truncate</span>
    </div>
  );
};
