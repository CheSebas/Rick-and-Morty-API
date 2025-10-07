export default function EpisodeModal({ episode, onClose }) {
  if (!episode) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg max-w-md w-full p-6 relative"
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        {/* Contenido */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-lime-400">
            {episode.episode} - {episode.name}
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Fecha de emisión:</span>{" "}
            {episode.air_date}
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Cantidad de personajes:</span>{" "}
            {episode.characters?.length}
          </p>
        </div>
      </div>
    </div>
  );
}
