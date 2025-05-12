'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BotonHome() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/docente/dashboard')}
      className="fixed bottom-6 right-6 z-50"
    >
      <Image
        src="/home-icon.webp"
        alt="Home"
        width={60}
        height={60}
        className="rounded-lg shadow-md hover:scale-105 transition"
      />
    </button>
  );
}
