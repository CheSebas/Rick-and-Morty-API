export default function CharacterCard({ character }) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 border border-cyan-500/20 dark:border-lime-700/40 hover:ring-2 hover:ring-cyan-500 dark:hover:ring-lime-400 transition">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-lg w-full"
      />
      <h3 className="mt-2 font-semibold text-neutral-900 dark:text-lime-400">
        {character.name}
      </h3>
      <p className="text-sm text-green-400 dark:text-cyan-500">
        {character.species}
      </p>
    </div>
  );
}
