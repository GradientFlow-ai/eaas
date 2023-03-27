import tw from "tailwind-styled-components";

import { AppContext, Themes, usePageState, usePageTheme } from "state";

import { FADE_IN_ANIMATION_SETTINGS } from "lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

import { BurgerMenu } from "./burger";

interface BackgroundProps {
  $bgColor: string;
}

const Background = tw.div<BackgroundProps>`
  fixed
  h-screen
  w-full
  bg-gradient-to-br
  from-indigo-50
  via-white
  ${(p) => (p.$bgColor == "to-rose-200" ? "to-rose-200" : "to-cyan-100")}
`;

const Main = tw.main`
  flex
  w-full
  flex-col
  items-center
  justify-center
  py-32
`;

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { shouldShowBurger, currentTheme } = usePageState();

  const pageTheme = usePageTheme();

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <Background $bgColor={pageTheme.bgColor} />
      <Header
        setShowSignInModal={setShowSignInModal}
        shouldShowBurger={shouldShowBurger}
      />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Header = ({
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
      alt="Precedent logo"
      width="30"
      height="30"
      className="mr-2 rounded-sm"
    ></Image>
    <p>GradientFlow ✨</p>
  </Link>
);

const Footer = () => (
  <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
    <p className="text-gray-500">Get Yer Embeddings On</p>
  </div>
);
