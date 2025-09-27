import { useEffect, useState } from "react";
import { getEpisodes } from "../services/api";
import EpisodeCard from "../components/EpisodeCard";

export default function Episode() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [filters, setFilters] = useState({
    name: "",
    episode: "",
  });

  // Llamada a la API
  useEffect(() => {
    getEpisodes(page, filters).then((data) => {
      if (data.error) {
        setEpisodes([]);
        setInfo({});
      } else {
        setEpisodes(data.results);
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
        Episodios
      </h1>

      {/* Filtros */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-cyan-500/10 dark:bg-neutral-900 p-4 rounded-lg">
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
          name="episode"
          placeholder="Código (Ej: S01E01)"
          value={filters.episode}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        />
      </form>

      {/* Grid de episodios */}
      {episodes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      ) : (
        <p className="text-center text-green-400">
          No se encontraron episodios
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
