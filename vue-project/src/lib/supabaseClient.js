import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://apnosoahfwrxgmklgwsv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbm9zb2FoZndyeGdta2xnd3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjY4NTUsImV4cCI6MjA1MzYwMjg1NX0.DBltgZtTB_Qv_o30-OsZ4ZmuYVJNmiUL5ruuG-Zaz34')