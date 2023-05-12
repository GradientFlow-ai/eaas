import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import tw from "tailwind-styled-components";
import { useSession } from "next-auth/react";
import { ChevronDown } from "lucide-react";

import { getPresignedS3Link } from "lib/getPresignedS3Link";
import { SanitizedEmbeddingsFileInfo } from "types";
import randomEmoji from "lib/randomEmoji";
import { useSignInModalContext } from "state";
import Popover from "components/shared/popover";
import ExpandableText from "./ExpandableText";

const Button = tw.button`
  bg-blue-400
  hover:bg-blue-500
  text-white
  font-semibold
  py-2
  px-4
  rounded
  shadow-md
  transition
  duration-200
`;
const DownloadItem = ({ s3Key }: { s3Key: string }) => {
  const { data: session } = useSession();
  const { setShowSignInModal } = useSignInModalContext();
  const [s3Link, setS3Link] = useState<string | null>(null);

  const handleClick = () => {
    if (!session) {
      setShowSignInModal(true);
    } else {
      getPresignedS3Link(s3Key, setS3Link);
    }
  };

  // Download file once S3 link is set
  useEffect(() => {
    console.log("running effect");
    if (s3Link) {
      const link = document.createElement("a");
      link.href = s3Link;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [s3Key, s3Link]);

  return <Button onClick={handleClick}>Download</Button>;
};

const CardTitle = ({ title }: { title: string }) => {
  const [emoji, setEmoji] = useState("");
  useEffect(() => setEmoji(randomEmoji()), []);
  return (
    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
      <Balancer>
        <div className="mt-6 text-center text-gray-500 md:text-xl">
          {emoji} {title}
        </div>
      </Balancer>
    </h2>
  );
};

interface WrapDivProps {
  large?: boolean;
}

const WrapDiv = tw.div<WrapDivProps>`
  relative
  col-span-1
  h-96
  overflow-hidden
  rounded-xl
  border
  border-gray-200
  bg-white
  shadow-md
  ${(props) => props.large && "md:col-span-2"}
`;

export default function Card({ item, large }: { item: any; large?: boolean }) {
  const { name, model, downloadSize, license } = item;

  return (
    <WrapDiv>
      <div className="mx-auto max-w-md text-center">
        <CardTitle title={name} />
        <div className="flex h-60 items-center justify-center">
          <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
            <span className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800">
              model
            </span>

            <span className="font-medium text-gray-800">download size</span>
            <span className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
              License
            </span>
            <span className="font-mono">{model}</span>
            <span className="font-mono">{downloadSize}</span>
            <span className="font-mono">{license}</span>
          </div>
        </div>
        <DownloadItem />
      </div>
    </WrapDiv>
  );
}
