import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Redirector() {
  const { query } = useRouter();
  const target = Array.isArray(query.to) ? query.to[0] : query.to;
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
      <Image src="/logo.svg" alt="Logo" width={96} height={96} />
      <div className="mt-6 flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-gray-700 animate-spin" />
        <p className="mt-4 text-lg font-medium text-gray-700">
          Redirecting in {count}…
        </p>
      </div>
    </div>
  );
}
