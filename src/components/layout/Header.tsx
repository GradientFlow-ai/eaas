import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";

import { FADE_IN_ANIMATION_SETTINGS } from "lib/constants";
import useScroll from "lib/hooks/use-scroll";

import UserDropdown from "./user-dropdown";
import { BurgerMenu } from "./burger";

export const Header = ({
  setShowSignInModal,
  shouldShowBurger,
}: {
  setShowSignInModal: (a: boolean) => void;
  shouldShowBurger: boolean;
}) => {
  const { data: session, status } = useSession();
  const scrolled = useScroll(50);

  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        {shouldShowBurger ? <BurgerMenu /> : <TopLeftLogoAndName />}
        <div>
          <AnimatePresence>
            {!session && status !== "loading" ? (
              <motion.button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
                {...FADE_IN_ANIMATION_SETTINGS}
              >
                Sign In
              </motion.button>
            ) : (
              <UserDropdown />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const TopLeftLogoAndName = () => (
  <Link href="/" className="flex items-center font-display text-2xl">
    <Image
      src="/logo.jpg"
      alt="GradientFlow logo"
      width="30"
      height="30"
      className="h-10 w-10 rounded-full"
    ></Image>
    <p>GradientFlow ✨</p>
  </Link>
);
