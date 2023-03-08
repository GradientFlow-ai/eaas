import Card from "components/home/card";
import { Layout } from "components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {
  DEPLOY_URL,
  FADE_DOWN_ANIMATION_VARIANTS,
  DUMMY_DATA,
} from "@/lib/constants";
import { Github, Twitter } from "components/shared/icons";
import WebVitals from "components/home/web-vitals";
import ComponentGrid from "components/home/component-grid";
import Image from "next/image";
import Scatterplot from "components/scatterplot";
import { useEffect, useState } from "react";

export default function Home() {
  const [visualizationData, setVisualizationData] = useState(DUMMY_DATA);

  const fetchVisualizationData = useEffect(() => {
    fetch("/api/visualizations/tsne")
      .then((res) => res.json())
      .then((data) => setVisualizationData(data.data));
  }, []);

  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <TwitterAnchor />
        <PitchMessage />
        <Subtitle />
        <motion.div
          className="mx-auto flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <motion.p
            className="mt-6 text-center italic text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Gapminder data, grouped with t-SNE
          </motion.p>

          <Scatterplot data={visualizationData} width={600} height={600} />
        </motion.div>

        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <TestViz />
          <TestPython />
        </motion.div>
      </motion.div>
    </Layout>
  );
}

// Features can go before closing Layout tag
// TODO add features for us
/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */
const Features = () => (
  <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
    {features.map(({ title, description, demo, large }) => (
      <Card
        key={title}
        title={title}
        description={description}
        demo={
          title === "Beautiful, reusable components" ? <ComponentGrid /> : demo
        }
        large={large}
      />
    ))}
  </div>
);
const vizAPI = (query: string) =>
  fetch("/api/visualizations/tsne", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

const embedAPI = (query: string) =>
  fetch("/api/embeddings/generateEmbeddings", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

const searchAPI = (query: string) =>
  fetch("/api/embeddings/searchEmbeddings", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

const pythonAPI = (query: string) =>
  fetch("/api/python/handlerTest", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

const TestEmbed = () => (
  <button
    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
    onClick={() => embedAPI(`{ hello }`)}
  >
    <Image alt="OpenAI logo" src="/openai.svg" width={25} height={25} />
    <p>Create an embedding with OpenAI</p>
  </button>
);

const TestSearch = () => (
  <button
    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
    onClick={() => searchAPI(`{ hello }`)}
  >
    <p>Get the most similar documents</p>
  </button>
);

const TestPython = () => (
  <button
    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
    onClick={() => pythonAPI(`{ hello }`)}
  >
    <p>Try Python</p>
  </button>
);

const TestViz = () => (
  <button
    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
    onClick={() => vizAPI(`{ hello }`)}
  >
    <p>Demo a viz</p>
  </button>
);

const GithubStarAnchor = () => (
  <a
    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
    href="https://github.com/steven-tey/precedent"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github />
    <p>Star on GitHub</p>
  </a>
);

const TwitterAnchor = () => (
  <motion.a
    variants={FADE_DOWN_ANIMATION_VARIANTS}
    href="https://twitter.com/danlovesproofs/status/1618745805950844930"
    target="_blank"
    rel="noreferrer"
    className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
  >
    <Twitter className="h-5 w-5 text-[#1d9bf0]" />
    <p className="text-sm font-semibold text-[#1d9bf0]">
      Introducing Embeddings As a Service
    </p>
  </motion.a>
);

const VercelAnchor = () => (
  <a
    className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
    href={DEPLOY_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="h-4 w-4 group-hover:text-black"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L20 20H4L12 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <p>Deploy to Vercel</p>
  </a>
);

const Subtitle = () => (
  <motion.p
    className="mt-6 text-center text-gray-500 md:text-xl"
    variants={FADE_DOWN_ANIMATION_VARIANTS}
  >
    <Balancer>
      Upload, fine-tune, update, and visualize your embeddings
    </Balancer>
  </motion.p>
);

const PitchMessage = () => (
  <motion.h1
    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
    variants={FADE_DOWN_ANIMATION_VARIANTS}
  >
    <Balancer>{"We manage your embeddings so you don't have to"}</Balancer>
  </motion.h1>
);

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
