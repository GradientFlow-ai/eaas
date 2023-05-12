import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface SignInModalContextProps {
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}

export const SignInModalContext = createContext<SignInModalContextProps | null>(null);

export function useSignInModalContext() {
  const context = useContext(SignInModalContext);
  if (!context) {
    throw new Error("useSignInModalContext must be used within a SignInModalContextProvider");
  }
  return context;
}
