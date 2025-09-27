import { useEffect, useState } from "react";
import { getLocations } from "../services/api";
import LocationCard from "../components/LocationCard";

export default function Location() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  // Llamada a la API
  useEffect(() => {
    getLocations(page, filters).then((data) => {
      if (data.error) {
        setLocations([]);
        setInfo({});
      } else {
        setLocations(data.results);
        setInfo(data.info);
      }
    });
  }, [page, filters]);

  // Manejo de filtros
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setPage(1);
  };

  return (
    <section className="px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-lime-400">
        Ubicaciones
      </h1>

      {/* Filtros */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-cyan-500/10 dark:bg-neutral-900 p-4 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={filters.name}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        />
        <input
          type="text"
          name="type"
          placeholder="Tipo"
          value={filters.type}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        />
        <input
          type="text"
          name="dimension"
          placeholder="Dimensión"
          value={filters.dimension}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        />
      </form>

      {/* Grid de ubicaciones */}
      {locations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      ) : (
        <p className="text-center text-green-400">
          No se encontraron ubicaciones
        </p>
      )}

      {/* Paginación */}
      {info.pages && (
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!info.prev}
            className="px-4 py-2 bg-cyan-500 hover:bg-lime-400 text-white rounded disabled:opacity-50 transition-colors"
          >
            ← Anterior
          </button>
          <span className="text-neutral-900 dark:text-lime-400">
            Página {page} de {info.pages}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!info.next}
            className="px-4 py-2 bg-cyan-500 hover:bg-lime-400 text-white rounded disabled:opacity-50 transition-colors"
          >
            Siguiente →
          </button>
        </div>
      )}
    </section>
  );
}
