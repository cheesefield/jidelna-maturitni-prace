import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yefnjzrwxguyrgbsgypu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZm5qenJ3eGd1eXJnYnNneXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0NjcyNDQsImV4cCI6MTk2MTA0MzI0NH0.OhIoO0SNbXZC3x85_8_4V5dsra5e3zZzd-7G6qK9i98"
);
