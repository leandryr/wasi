'use client';
import Image from 'next/image';

export default function PerfilDocente() {
  return (
    <section className="bg-[#FDF6E7] p-6 rounded shadow text-[#1A3B1F]">
      <h2 className="text-2xl font-extrabold text-center mb-6 uppercase">Mi Perfil</h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Avatar o recuadro */}
        <div className="w-32 h-32 bg-[#FAF6E0] border-2 border-[#1A3B1F] rounded shadow-sm"></div>

        {/* Datos */}
        <div className="text-sm md:text-base space-y-2">
          <p><strong>NOMBRE DEL DOCENTE:</strong> María González</p>
          <p><strong>NIVEL DE DOCENTE:</strong> Avanzado</p>
          <p><strong>HORAS DICTADAS:</strong> 125 hrs</p>
          <p><strong>APLICAR A CURSOS GRATUITOS:</strong> Habilitado</p>
          <p><strong>OTROS:</strong> Experta en inglés conversacional</p>
        </div>
      </div>
    </section>
  );
}
