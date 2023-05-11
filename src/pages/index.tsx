import { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

import { CardGrid } from "components/shared/Grid/CardGrid";
import { Upload } from "components/shared/Upload";
import { Layout } from "components/layout";
import { AppContext, themes } from "state";

import emojis from "lib/emojis";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  communitySubtitle,
  pitchMessage,
} from "lib/constants";
import { Github, Twitter } from "components/shared/icons";
import WebVitals from "components/home/web-vitals";
import ComponentGrid from "components/home/component-grid";

export default function Home() {
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
        <PitchMessage />
        <Upload />
        <Subtitle />
      </motion.div>
      <CardGrid />
    </Layout>
  );
}

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

const Subtitle = () => (
  <motion.p
    className="mb-10 mt-6 text-center text-gray-500 md:text-xl"
    variants={FADE_DOWN_ANIMATION_VARIANTS}
  >
    <Balancer>{pitchMessage}</Balancer>
  </motion.p>
);

const PitchMessage = () => (
  <motion.h1
    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
    variants={FADE_DOWN_ANIMATION_VARIANTS}
  >
    <Balancer>{communitySubtitle}</Balancer>
  </motion.h1>
);
