"use client"


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Redirector() {
  const router = useRouter();
  const target = process.env.NEXT_PUBLIC_REDIRECT_URL
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (!target) return;
    const tick = setInterval(() => setCount((c) => c - 1), 1000);
    const go = setTimeout(() => {
      window.location.href = target;
    }, 3000);
    return () => {
      clearInterval(tick);
      clearTimeout(go);
    };
  }, [target]);

  if (!target) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">No target URL provided.</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-4">
        <div className='flex flex-col items-center gap-6 -mt-20'>
            <Image src="/logo.png" alt="Logo" width={96} height={96} className='rounded-full'/>
            <h1 className='text-black text-lg font-semibold'>Brand Name | Tag Line</h1>
        </div>

      <div className="mt-6 flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-gray-700 animate-spin" />
        <p className="mt-4 text-lg font-medium text-gray-700">
          Redirecting in {count}…
        </p>
      </div>
    </div>
  );
}
