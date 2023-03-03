<h1 align="center">Embeddings As a Service</h1>

<p align="center">
We manage your embeddings so you don't have to
</p>

<p align="center">
  <a href="https://twitter.com/steventey">
    <img src="https://img.shields.io/twitter/follow/coyotespike?style=flat&label=coyotespike&logo=twitter&color=0bf&logoColor=fff" alt="coyotespike Twitter follower count" />
  </a>
  <a href="https://github.com/coyotespike">
    <img src="https://img.shields.io/github/stars/coyotespike?label=coyotespike" alt="coyotespike repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
</p>
<br/>

## Introduction

Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.

## Tech Stack + Features

The below may change soon as we rebuild on Akash Network.

### Frameworks

- Vector DB on Supabase.
- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`@next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`@vercel/og`](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) – Generate dynamic Open Graph images on the edge
- [`react-wrap-balancer`](https://github.com/shuding/react-wrap-balancer) – Simple React component that makes titles more readable

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way

- Currently using [t-SNE](https://github.com/scienceai/tsne-js/), may switch to other options. [linear time complexity??](https://github.com/tensorflow/tfjs-tsne). idk about [ andrej's ](https://github.com/karpathy/tsnejs)



## Useful tips
`npx prisma db push`, be aware that this will drop and recreate the tables
`npx prisma generate` then runs to generate the client

This function lives on supabase:
```
create or replace function match_documents (
  query_embedding vector(1536),
  similarity_threshold float,
  match_count int
)
returns table (
  id int4,
  content text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    "Documents".id,
    "Documents".content,
    (1 - ("Documents".embedding <=> query_embedding)) as similarity
  from "Documents"
  where (1 - ("Documents".embedding <=> query_embedding)) > similarity_threshold
  order by "Documents".embedding <=> query_embedding
  limit match_count;
end;
$$;

-- you can call the function from your browser with supabase-js
-- const { data, error } = await supabase.rpc('match_documents', { query_embedding: [], similarity_threshold: 0.5, match_count: 10 })
-- <->	Euclidean distance
-- <#>	negative inner product
-- <=>	cosine distance
-- OpenAI recommends cosine similarity on their embeddings, so we will use that here.
```
[Issue with docs filed](https://github.com/supabase/supabase/issues/12244)

## To Dos
    - configure policies for supa
    - Convert dashboard [ from Bootstrap to Tailwind ](https://tools.bitfertig.de/bootstrap2tailwind/index.php)
    - Add [ Tailwind styled components ](https://github.com/MathiasGilson/tailwind-styled-component)
