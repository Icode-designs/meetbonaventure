-- ============================================================
-- Analytics Events table
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS analytics_events (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type text NOT NULL,       -- 'profile_view' | 'case_study_click' | 'resume_download' | 'contact_submission'
  metadata   jsonb DEFAULT '{}',  -- optional extra info (e.g. case study id, page path)
  created_at timestamptz DEFAULT now()
);

-- Indexes for fast dashboard queries
CREATE INDEX IF NOT EXISTS idx_events_type    ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_events_created ON analytics_events(created_at);

-- Allow anonymous inserts (public site visitors) but restrict reads to authenticated users
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert analytics events"
  ON analytics_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read analytics events"
  ON analytics_events FOR SELECT
  TO authenticated
  USING (true);

-- Also allow anon to read (for the dashboard which uses the anon key)
CREATE POLICY "Anon can read analytics events"
  ON analytics_events FOR SELECT
  TO anon
  USING (true);
