'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Note } from '@/lib/supabase';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function NotePage({ params }: { params: { id: string } }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', params.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) throw error;
      return data as Note;
    },
  });

  useEffect(() => {
    const checkSubscription = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: subscription } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('status', 'active')
          .single();

        setIsSubscribed(!!subscription);
      }
    };

    checkSubscription();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">Error loading note. Please try again later.</div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Note not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{note.title}</h1>
          <p className="text-gray-600 mb-6">{note.description}</p>
        </div>

        {isSubscribed ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div style={{ height: '750px' }}>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={note.pdf_url}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Subscribe to View This Note
            </h2>
            <p className="text-gray-600 mb-6">
              Get access to all notes with a subscription.
            </p>
            <button
              onClick={() => window.location.href = '/profile'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 