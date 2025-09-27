import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  // Llamada a la API con filtros y paginación
  useEffect(() => {
    getCharacters(page, filters).then((data) => {
      if (data.error) {
        setCharacters([]);
        setInfo({});
      } else {
        setCharacters(data.results);
        setInfo(data.info);
      }
    });
  }, [page, filters]);

  // Manejo de cambios en filtros
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setPage(1); // resetear página al cambiar filtro
  };

  return (
    <section className="px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-lime-400">
        Personajes
      </h1>

      {/* Filtros */}
      <form className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-cyan-500/10 dark:bg-neutral-900 p-4 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={filters.name}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        >
          <option value="">Estado</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <input
          type="text"
          name="species"
          placeholder="Especie"
          value={filters.species}
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
        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-cyan-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 dark:bg-neutral-900 dark:text-white"
        >
          <option value="">Género</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>

      {/* Grid de personajes */}
      {characters.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ) : (
        <p className="text-center text-green-400">
          No se encontraron personajes
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
