-- Explicit deny SELECT/UPDATE/DELETE to anon and authenticated; only service_role can read
CREATE POLICY "Deny select to public"
ON public.access_requests
FOR SELECT
TO anon, authenticated
USING (false);

-- Replace permissive insert policy with a validated one (no bare true)
DROP POLICY IF EXISTS "Anyone can submit an access request" ON public.access_requests;

CREATE POLICY "Anyone can submit a valid access request"
ON public.access_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) > 0
  AND length(btrim(company)) > 0
  AND length(btrim(phone)) > 0
  AND length(btrim(company_type)) > 0
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);