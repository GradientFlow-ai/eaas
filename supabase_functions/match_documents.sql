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
