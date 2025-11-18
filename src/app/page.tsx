'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to executive dashboard like the demo
    router.push('/dashboard/executive');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Glynac WMS Analytics</h1>
        <p className="text-black">Redirecting to Executive Dashboard...</p>
      </div>
    </div>
  );
}