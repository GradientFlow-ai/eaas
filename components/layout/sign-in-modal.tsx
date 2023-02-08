import Modal from "@/components/shared/modal";
import { signIn, getProviders } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { LoadingDots, Google, Github } from "@/components/shared/icons";
import { Mail } from "lucide-react";
import Image from "next/image";

type ButtonOptionsType = {
    [key: string]: any
};

const ButtonOptions: ButtonOptionsType = {
    Google: Google,
    GitHub: Github,
    Email: Mail,
};

const SignInButton = ({ signIn, provider: { id, name } }: { signIn: (id: string) => void, provider: any }) => {
  const [signInClicked, setSignInClicked] = useState(false);
  const Icon = useMemo(() => ButtonOptions[name], [name]);
  return (
    <button
      disabled={signInClicked}
      className={`${
        signInClicked
          ? "cursor-not-allowed border-gray-200 bg-gray-100"
          : "border border-gray-200 bg-white text-black hover:bg-gray-50"
      } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
      onClick={() => {
        setSignInClicked(true);
        signIn(id);
      }}
    >
      {signInClicked ? (
        <LoadingDots color="#808080" />
      ) : (
        <>
          {Icon && <Icon className="h-5 w-5" />}
          <p>Sign In with {name}</p>
        </>
      )}
    </button>
  );
};

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
  providers,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
  providers: any;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
            width={20}
            height={20}
          />
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Sign in to your account to continue
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          {providers && Object.entries(providers).map(([key, value]) => (
            <SignInButton key={key} signIn={signIn} provider={value} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const [providers, setProviders] = useState({});

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers!);
    };
    fetchProviders().catch((err) => console.log(err));
  }, []);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
        providers={providers}
      />
    );
  }, [providers, showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
