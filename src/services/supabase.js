import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gippdbjhoowknubomrjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpcHBkYmpob293a251Ym9tcmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzY4ODIsImV4cCI6MjAwNjcxMjg4Mn0.AZi5S0xEFIJ23hm3omdhcd66TFBPWOwmr4SowvZoL8Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
