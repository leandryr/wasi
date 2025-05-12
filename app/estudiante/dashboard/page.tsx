import Bienvenida from '@/components/estudiante/Bienvenida';

export default function EstudianteDashboard() {
  return (
        <main className="p-6 space-y-6">
          <Bienvenida />
          {/* Aquí seguiremos agregando cursos, progreso, tareas, etc. */}
        </main>
  );
}
