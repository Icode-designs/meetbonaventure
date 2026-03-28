import { supabase } from "./supabase";

export type AnalyticsEvent =
  | "profile_view"
  | "case_study_click"
  | "resume_download"
  | "contact_submission";

/**
 * Fire-and-forget analytics event tracker.
 * Never throws or blocks the UI.
 */
export async function trackEvent(
  eventType: AnalyticsEvent,
  metadata: Record<string, unknown> = {}
) {
  try {
    await supabase.from("analytics_events").insert({
      event_type: eventType,
      metadata,
    });
  } catch {
    // silently swallow – analytics should never break the app
  }
}
