import { createClient } from "@supabase/supabase-js";

const URL = "https://fmdqmoypuxykaxphufxz.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZHFtb3lwdXh5a2F4cGh1Znh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMzE0NjMsImV4cCI6MjAzOTYwNzQ2M30.EK06EBNw2bz3uqlkfOVNPsRqpqCSnAvb8O-B7fv3jls";

export const supabase = createClient(URL, API_KEY);