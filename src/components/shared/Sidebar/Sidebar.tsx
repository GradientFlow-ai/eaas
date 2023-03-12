import Image from "next/image";
import { Transition } from "@headlessui/react";
import { usePageState, usePageTheme } from "state";

import items from "./sidebarSections";

const SidebarHeader = () => (
  <div className={`flex h-24 w-full items-center justify-start space-x-8 `}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    <span className="font-sans text-lg font-medium">Your Embeddings</span>
  </div>
);

const SidebarContent = () => {
  const pageTheme = usePageTheme();

  return (
    <div
      className={`flex h-full flex-1 flex-col border-t border-b py-8 border-${pageTheme.bgColor}-${pageTheme.text} border-opacity-25`}
    >
      <div className="flex flex-1 flex-col py-4">
        <div
          className={`flex flex-col space-y-2 text-${pageTheme.bgColor}-${pageTheme.text}`}
        >
          {items.map((a) => {
            return (
              <div
                key={a.name}
                className="flex w-full items-center space-x-4 p-2"
              >
                {a.Icon()}
                <span className="text-sm font-semibold">{a.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SideBar = () => {
  const { isSidebarOpen } = usePageState();
  return (
    <Transition
      show={isSidebarOpen}
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`flex w-64 flex-col px-6  `}>
        <SidebarHeader />
        <SidebarContent />
      </div>
    </Transition>
  );
};

export default SideBar;
