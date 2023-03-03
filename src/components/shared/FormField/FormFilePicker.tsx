import { useState } from "react";
import { BaseButton } from "../BaseButton";

import Link from "next/link";

type ColorButtonKey =
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
  accept?: string;
  color: ColorButtonKey;
  isRoundIcon?: boolean;
};

const FormFilePicker = ({ label, icon, accept, color, isRoundIcon }: Props) => {
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFile(event.currentTarget.files[0]);
    }
  };

  const showFilename = !isRoundIcon && file;

  return (
    <div className="relative flex items-stretch justify-start">
      <label className="inline-flex">
        <BaseButton
          className={`${isRoundIcon ? "h-12 w-12" : ""} ${
            showFilename ? "rounded-r-none" : ""
          }`}
          iconSize={isRoundIcon ? 24 : undefined}
          label={isRoundIcon ? undefined : label}
          icon={icon}
          color={color}
          roundedFull={isRoundIcon}
          asAnchor
        />
        <input
          type="file"
          className="-z-1 absolute top-0 left-0 h-full w-full cursor-pointer opacity-0 outline-none"
          onChange={handleFileChange}
          accept={accept}
        />
      </label>
      {showFilename && (
        <div className="max-w-full flex-grow-0 overflow-x-hidden rounded-r border border-gray-200 bg-gray-100 px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
          <span className="max-w-full text-ellipsis line-clamp-1">
            {file.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default FormFilePicker;
