import { Children, cloneElement, ReactElement, ReactNode } from "react";
import { BaseIcon } from "../BaseButton";
import {
  UserCircleIcon,
  LockClosedIcon,
  FireIcon,
  PaperAirplaneIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/solid";

type Props = {
  label?: string;
  labelFor?: string;
  help?: string;
  icon?: JSX.Element;
  isBorderless?: boolean;
  isTransparent?: boolean;
  hasTextareaHeight?: boolean;
  children: ReactNode;
};

const SubForm = (props: any) => {
  const controlClassName = `px-10 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none ${
    props.hasTextareaHeight ? "h-24" : "h-12"
  } ${props.isBorderless ? "border-0" : "border"} ${
    props.isTransparent ? "bg-transparent" : "bg-white dark:bg-slate-800"
  }`;

  return cloneElement(props.form, {
    className: `${controlClassName}`,
  });
};

const FormField = ({ icon, ...props }: Props) => (
  <div className="mb-6 last:mb-0">
    {props.label && (
      <label
        htmlFor={props.labelFor}
        className={`mb-2 block font-bold ${
          props.labelFor ? "cursor-pointer" : ""
        }`}
      >
        {props.label}
      </label>
    )}
    <div>
      {Children.map(props.children as any, (child: ReactElement, index) => (
        <div className="relative">
          <SubForm form={child} className="pl-10" />
          {icon && (
            <BaseIcon
              icon={icon}
              w="w-10"
              h={props.hasTextareaHeight ? "h-full" : "h-12"}
              className="pointer-events-none absolute top-0 left-0 z-10 text-gray-500 dark:text-slate-400"
            />
          )}
        </div>
      ))}
    </div>
    {props.help && (
      <div className="mt-1 text-xs text-gray-500 dark:text-slate-400">
        {props.help}
      </div>
    )}
  </div>
);

export default FormField;
