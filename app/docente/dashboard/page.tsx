import PerfilDocente from '@/components/docente/PerfilDocente';
import CalendarioHorarios from '@/components/docente/CalendarioHorarios';
import EventosDocente from '@/components/docente/EventosDocente';
import VistaResumen from '@/components/docente/VistaResumen';
import MisClases from '@/components/docente/MisClases';
import CalendarioCompacto from '@/components/docente/CalendarioCompacto';
import VideoLlamada from '@/components/docente/VideoLlamada';
import ContenidoInteractivo from '@/components/docente/ContenidoInteractivo';

export default function DocenteDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Columna principal */}
      <div className="col-span-2 space-y-6">
        <PerfilDocente />
        <VistaResumen />
        <MisClases />
        <CalendarioHorarios />
        <EventosDocente />
        <VideoLlamada />
        <ContenidoInteractivo />
      </div>

      {/* Columna lateral */}
      <div className="col-span-1 space-y-6">
        <CalendarioCompacto />
      </div>
    </div>
  );
}
