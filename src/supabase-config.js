import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://qepjomwbyofthkrephyb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlcGpvbXdieW9mdGhrcmVwaHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MzMyNzcsImV4cCI6MjAzMDUwOTI3N30.kG-pkQPclHZePF0HaZX23-Ee7mjjCrK4GAvl7j6nipo')

export {supabase};