'use client';
import { BookOpen, Brain, Languages } from 'lucide-react';

const contenido = [
  {
    titulo: 'Vocabulario clave',
    texto: 'Palabras básicas para presentaciones personales.',
    icono: Languages,
    color: 'bg-[#F59E0B]',
  },
  {
    titulo: 'Reglas gramaticales',
    texto: 'Uso de presente simple con el verbo to be.',
    icono: BookOpen,
    color: 'bg-[#1A3B1F]',
  },
  {
    titulo: 'Ejercicio interactivo',
    texto: 'Completa frases con tu información personal.',
    icono: Brain,
    color: 'bg-[#84CC16]',
  },
];

export default function ContenidoInteractivo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-extrabold text-[#1A3B1F] uppercase">Contenido Educativo</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contenido.map(({ titulo, texto, icono: Icono, color }, i) => (
          <div
            key={i}
            className="bg-[#FDF6E7] p-4 rounded-lg shadow border border-gray-200 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-full text-white ${color}`}>
                <Icono size={20} />
              </div>
              <h3 className="text-[#1A3B1F] font-bold">{titulo}</h3>
            </div>
            <p className="text-sm text-gray-700">{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
