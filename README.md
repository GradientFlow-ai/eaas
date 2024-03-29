<h1 align="center">Gradients, Flowing To a Neighborhood Near You</h1>

<p align="center">
Liberty and Embeddings for All
</p>

<p align="center">
  <a href="https://twitter.com/coyotespike">
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

GradientFlow is a community-driven collection of open-source embeddings, ready for you to train your AI, perform multimodal semantic search, and fine-tune.

## Tech Stack + Features

The below may change soon as we rebuild on Akash Network.

### Frameworks

- Vector DB on Supabase.
- [Next.js](https://nextjs.org/)
- [Auth.js](https://authjs.dev/)
- [Prisma](https://www.prisma.io/)

### Platforms

- [Vercel](https://vercel.com/), for the frontend

### UI

- [Tailwind CSS](https://tailwindcss.com/)
- [Radix](https://www.radix-ui.com/)
- [Framer Motion](https://framer.com/motion)
- [Lucide](https://lucide.dev/), just a few left
- [`@next/font`](https://nextjs.org/docs/basic-features/font-optimization)
- [`@vercel/og`](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [`react-wrap-balancer`](https://github.com/shuding/react-wrap-balancer)
- [Easy React-pastable emojis](https://dreamyguy.github.io/react-emojis/)

### Code Quality

- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Miscellaneous

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
