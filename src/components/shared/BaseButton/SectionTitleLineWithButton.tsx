import React, { Children, ReactNode } from "react";
import BaseButton from "./BaseButton";
import BaseIcon from "./BaseIcon";
import IconRounded from "./IconRounded";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

type Props = {
  icon: JSX.Element;
  title: string;
  main?: boolean;
  children?: ReactNode;
};

export default function SectionTitleLineWithButton({
  icon,
  title,
  main = false,
  children,
}: Props) {
  const hasChildren = !!Children.count(children);

  return (
    <section
      className={`${main ? "" : "pt-6"} mb-6 flex items-center justify-between`}
    >
      <div className="flex items-center justify-start">
        {icon && main && (
          <IconRounded icon={icon} color="light" className="mr-3" bg />
        )}
        {icon && !main && <BaseIcon icon={icon} className="mr-2" />}
        <h1 className={`leading-tight ${main ? "text-3xl" : "text-2xl"}`}>
          {title}
        </h1>
      </div>
      {children}
      {!hasChildren && (
        <BaseButton icon={<Cog6ToothIcon />} color="whiteDark" />
      )}
    </section>
  );
}
