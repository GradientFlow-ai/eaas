import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useFetchFiles, usePageState } from "state";
import { SanitizedEmbeddingsFileInfo } from "types";

import Card from "./EmbeddingsCard";

const Heading = tw.h2`
bg-gradient-to-br
from-black
to-stone-500
bg-clip-text
text-center
font-display
text-3xl
text-transparent
drop-shadow-sm
`;
export const CardGrid = () => {
  useFetchFiles();
  const { s3FileInfo }: { s3FileInfo: Array<SanitizedEmbeddingsFileInfo> } =
    usePageState();
  return (
    <>
      <Heading>Embeddings</Heading>

      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {s3FileInfo.map((item) => (
          <Card key={item.uuid} item={item} />
        ))}
      </div>
    </>
  );
};
