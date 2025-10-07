export default function CharacterModal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg max-w-md w-full p-6 relative">
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        {/* Imagen y nombre */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src={character.image}
            alt={character.name}
            className="w-40 h-40 rounded-full border-4 border-cyan-400 dark:border-lime-400"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-lime-400">
            {character.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Estado:</span> {character.status}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Especie:</span> {character.species}
          </p>
          {character.type && (
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Tipo:</span> {character.type}
            </p>
          )}
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Género:</span> {character.gender}
          </p>

          {/* Origen y ubicación */}
          <div className="mt-4 text-left w-full space-y-1">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Origen:</span>{" "}
              {character.origin?.name}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Ubicación actual:</span>{" "}
              {character.location?.name}
            </p>
          </div>

          {/* Número de episodios */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Aparece en {character.episode?.length} episodios
          </p>
        </div>
      </div>
    </div>
  );
}
