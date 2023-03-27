export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const DEPLOY_URL = "https://localhost:3000";

export const DUMMY_DATA = [
  // { x: -0.13414751194986796, y: -0.3935611312813702 },
  // { x: 0.05240768059068097, y: 0.8814799638595909 },
  // { x: 0.8091779192200634, y: -0.5297540533109903 },
  // { x: -0.14130926670980365, y: 0.2869303939154417 },
  { x: -1, y: 0.377524319897966 },
  { x: 0.33176365946091535, y: 0.2567174414251148 },
  { x: 0.3751387694352182, y: -0.38730339235510686 },
  { x: 0.028188347949905455, y: -1 },
  { x: -0.5338914875808636, y: -0.01848535163329007 },
];

export const microservicesApi = process.env.DEV
  ? "http://localhost:3001/api"
  : "https://micro-api.vercel.app/api";


export const communitySubtitle = "Liberty and Embeddings for All"
export const enterpriseSubtitle = "We manage your embeddings so you don't have to"

export const oldPitch = "Upload, fine-tune, update, and visualize your embeddings"
export const pitchMessage = "Find open-source embeddings for semantic searching and AI training"
