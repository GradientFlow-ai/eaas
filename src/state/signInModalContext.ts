import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface SignInModalContextProps {
  setShowSignInModal?: Dispatch<SetStateAction<boolean>>;
}

export const SignInModalContext = createContext<SignInModalContextProps | null>(null);

export function useSignInModalContext() {
  return useContext(SignInModalContext);
}
