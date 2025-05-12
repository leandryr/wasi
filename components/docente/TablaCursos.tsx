const cursos = [
    { nombre: 'Matemática I', inscritos: 32, evaluaciones: 3 },
    { nombre: 'Física Básica', inscritos: 28, evaluaciones: 2 },
  ];
  
  export default function TablaCursos() {
    return (
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Mis Cursos</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="py-2">Curso</th>
              <th>Inscritos</th>
              <th>Evaluaciones</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.nombre} className="border-t">
                <td className="py-2">{curso.nombre}</td>
                <td>{curso.inscritos}</td>
                <td>{curso.evaluaciones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  