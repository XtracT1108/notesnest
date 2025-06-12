import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export type Note = {
  id: string;
  title: string;
  description: string;
  pdf_url: string;
  created_at: string;
};

export type Subscription = {
  id: string;
  user_id: string;
  status: 'active' | 'inactive' | 'expired';
  start_date: string;
  end_date: string;
  payment_id: string;
}; 