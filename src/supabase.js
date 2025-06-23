import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zkrtdotflemupwmdeonp.supabase.co/'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcnRkb3RmbGVtdXB3bWRlb25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NTkxNjEsImV4cCI6MjA2NjIzNTE2MX0.xW9rZ-WcfAtHqIlpp4cpjY1tAPhgJqJSMwrsueVlBVU'

export const supabase = createClient(supabaseUrl, supabaseKey)