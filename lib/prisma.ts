import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

/*
create or replace function match_documents (
    query_embedding vector(1536),
    similarity_threshold float,
    match_count int
)
returns table (
    id bigint,
    content text,
    similarity float
)
language plpgsql
as $$
begin
return query
select
id,
content,
(documents.embedding <=> query_embedding) as similarity
from documents
where (documents.embedding <=> query_embedding) > similarity_threshold
order by documents.embedding <=> query_embedding
limit match_count;
end;
$$;
*/
