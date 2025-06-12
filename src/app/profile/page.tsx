'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Subscription } from '@/lib/supabase';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { data: subscription, isLoading: isLoadingSubscription } = useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      return data as Subscription;
    },
    enabled: !!user,
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getUser();
  }, []);

  const handleSubscribe = async () => {
    // Initialize Razorpay
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 99900, // ₹999 in paise
      currency: 'INR',
      name: 'NotesNest',
      description: 'Monthly Subscription',
      handler: async (response: any) => {
        try {
          // Create subscription record
          const { error } = await supabase.from('subscriptions').insert({
            user_id: user.id,
            status: 'active',
            start_date: new Date().toISOString(),
            end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
            payment_id: response.razorpay_payment_id,
          });

          if (error) throw error;

          // Refresh subscription data
          window.location.reload();
        } catch (err) {
          console.error('Error creating subscription:', err);
        }
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  if (loading || isLoadingSubscription) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Account Information</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Subscription Status</h2>
            {subscription ? (
              <div>
                <p className="text-gray-600 mb-2">
                  Status: <span className="text-green-600 font-semibold">Active</span>
                </p>
                <p className="text-gray-600">
                  Valid until: {new Date(subscription.end_date).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4">No active subscription</p>
                <button
                  onClick={handleSubscribe}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Subscribe Now
                </button>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => supabase.auth.signOut()}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 