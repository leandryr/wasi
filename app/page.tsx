'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-[#F5F1E5] text-[#1A3B1F]">
      <main className="flex flex-col gap-10 row-start-2 items-center text-center max-w-xl">


        <h1 className="text-2xl font-bold">Bienvenido a WASI Community</h1>
        <p className="text-sm text-[#333]">
          Esta es una <strong>versión demo</strong> del panel. Puedes iniciar sesión para explorar sus funciones actuales. En las próximas semanas, iremos integrando más módulos y características exclusivas para tu institución.
        </p>

        <Link
          href="/login"
          className="bg-[#1A3B1F] text-white px-6 py-2 rounded-md font-medium hover:bg-[#2e5c31] transition"
        >
          Ir al Login →
        </Link>

        <p className="text-xs text-gray-600 mt-4">
          Si tienes comentarios o deseas personalizaciones, ¡contáctanos!
        </p>
      </main>

      <footer className="row-start-3 text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} WASI Community – Todos los derechos reservados
      </footer>
    </div>
  );
}
