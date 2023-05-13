import tw from "tailwind-styled-components";
import { ReactNode } from "react";

import {
  AppContext,
  SignInModalContext,
  Themes,
  usePageState,
  usePageTheme,
} from "state";

import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import { Header } from "./Header";

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
      <SignInModalContext.Provider value={{ setShowSignInModal }}>
        <Main>{children}</Main>
      </SignInModalContext.Provider>
      <Footer />
    </>
  );
}

const Footer = () => (
  <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
    <p className="text-gray-500">Get Yer Embeddings On</p>
  </div>
);
