import React, { ReactNode } from "react";

export const containerMaxW = "xl:max-w-6xl xl:mx-auto";

type Props = {
  children: ReactNode;
};

export default function SectionMain({ children }: Props) {
  return <section className={`p-6 ${containerMaxW}`}>{children}</section>;
}
