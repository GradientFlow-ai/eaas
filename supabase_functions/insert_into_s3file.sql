CREATE OR REPLACE FUNCTION insert_into_s3file(user_email text, file_uuid text, file_name text)
RETURNS TABLE (id int, uuid text, filename text, userId text) AS $$
BEGIN
    RETURN QUERY
    INSERT INTO public."S3File" (uuid, filename, userId)
    SELECT file_uuid, file_name, u.id
    FROM public."User" u
    WHERE u.email = user_email
    RETURNING *;
END;
$$ LANGUAGE plpgsql;
