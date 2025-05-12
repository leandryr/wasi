const data = [
    { label: 'Estudiantes', value: 124 },
    { label: 'Cursos Activos', value: 4 },
    { label: 'Evaluaciones', value: 9 },
  ];
  
  export default function ResumenCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.label} className="bg-white p-6 rounded shadow text-center">
            <p className="text-sm text-gray-500">{item.label}</p>
            <h2 className="text-2xl font-bold text-blue-600">{item.value}</h2>
          </div>
        ))}
      </div>
    );
  }
  