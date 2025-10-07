import { useState } from "react";
import EpisodeModal from "./EpisodeModal";

export default function EpisodeCard({ episode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 border border-cyan-500/20 dark:border-lime-700/40 hover:ring-2 hover:ring-cyan-500 dark:hover:ring-lime-400 transition"
      >
        <h3 className="font-semibold text-neutral-900 dark:text-lime-400">
          {episode.episode} - {episode.name}
        </h3>
        <p className="text-sm text-green-400 dark:text-cyan-500">
          Aired: {episode.air_date}
        </p>
      </div>

      {open && (
        <EpisodeModal episode={episode} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
