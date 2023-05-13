import Link from "next/link";
import tw from "tailwind-styled-components";

const Button = tw.button`
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline
  hover:bg-burnt-orange-300
  bg-burnt-orange-200
`;

export const Footer = () => (
  <div className="absolute flex w-full items-center justify-between border-t border-gray-200 bg-white py-5 px-4 text-center">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://gradientflow.canny.io/embeddings-and-feature-requests"
    >
      <Button>
        <span role="img" aria-label="robot">
          🤖
        </span>{" "}
        Ask for Embedding
      </Button>
    </a>
    <p className="text-gray-500">Get Yer Embeddings On</p>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://gradientflow.canny.io/embeddings-and-feature-requests"
    >
      <Button>
        <span role="img" aria-label="light-bulb">
          💡
        </span>{" "}
        Feature Idea
      </Button>
    </a>
  </div>
);
