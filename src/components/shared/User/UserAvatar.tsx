import React, { ReactNode } from "react";
import Image from "next/image";

import { BaseIcon } from "../BaseButton";

type Props = {
  username: string;
  avatar: JSX.Element;
  api?: string;
  className?: string;
  children?: ReactNode;
};

export default function UserAvatar({
  username,
  avatar,
  api = "avataaars",
  className = "",
  children,
}: Props) {
  return <div className={className}>{children}</div>;
}
