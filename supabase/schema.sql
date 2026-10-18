-- Run this in Supabase Dashboard > SQL Editor.
create table if not exists public.site_content (
  id integer primary key check (id = 1),
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

-- Public visitors may read the published portfolio content.
drop policy if exists "Public can read site content" on public.site_content;
create policy "Public can read site content"
on public.site_content for select
to anon, authenticated
using (true);

-- Only users whose Supabase Auth app_metadata.role is "admin" may write.
drop policy if exists "Admins can insert site content" on public.site_content;
create policy "Admins can insert site content"
on public.site_content for insert
to authenticated
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can update site content" on public.site_content;
create policy "Admins can update site content"
on public.site_content for update
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Initial placeholder row; the app will use built-in defaults until this row is saved.
insert into public.site_content (id, content)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

-- IMPORTANT:
-- 1. Create an admin user manually in Supabase Dashboard > Authentication > Users.
-- 2. Open that user and set app_metadata to: {"role":"admin"} using the supported admin metadata editor/API.
-- 3. Disable public signups in Authentication settings.
-- Never put a Supabase service_role key in NEXT_PUBLIC_* variables or frontend code.
