import React from "react";
import { BaseIcon } from "../BaseButton";

type Props = {
  label?: string;
  icon?: JSX.Element;
  className?: string;
  small?: boolean;
};

const PillTagPlain = ({ small = false, className = "", ...props }: Props) => {
  return (
    <div
      className={`inline-flex items-center capitalize leading-none ${
        small ? "text-xs" : "text-sm"
      } ${className}`}
    >
      {props.icon && (
        <BaseIcon
          icon={props.icon}
          h="h-4"
          w="w-4"
          className={small ? "mr-1" : "mr-2"}
        />
      )}

      {props.label && <span>{props.label}</span>}
    </div>
  );
};

export default PillTagPlain;
