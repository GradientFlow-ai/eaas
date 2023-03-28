import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import tw from "tailwind-styled-components";
import randomEmoji from "lib/randomEmoji";

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
const DownloadItem = () => {
  return <Button>Download</Button>;
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
