import { useEffect, useState } from "react";
import { getCharacters, getLocations, getEpisodes } from "../services/api";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import LocationCard from "../components/LocationCard";
import EpisodeCard from "../components/EpisodeCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data.results.slice(0, 4)));
    getLocations().then((data) => setLocations(data.results.slice(0, 4)));
    getEpisodes().then((data) => setEpisodes(data.results.slice(0, 4)));
  }, []);

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative bg-neutral-900 text-white py-20 text-center">
        <div className="absolute inset-0">
          <img
            src="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ab553cdc-e15d-4597-b65f-bec9201fd2dd/d6d4919b-86f5-11f0-a058-0afffffa4605?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=2000"
            alt="Rick and Morty"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-lime-700/30 to-neutral-900/90"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Rick & Morty Wiki</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explora personajes, ubicaciones y episodios de la famosa serie
          </p>
        </div>
      </section>

      {/* CHARACTERS */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-lime-400">
            Personajes
          </h2>
          <Link
            to="/character"
            className="text-cyan-500 dark:text-lime-400 hover:underline"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-lime-400">
            {" "}
            Ubicaciones
          </h2>
          <Link
            to="/location"
            className="text-cyan-500 dark:text-lime-400 hover:underline"
          >
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </section>

      {/* EPISODES */}
      <section className="px-6 mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-lime-400">
            {" "}
            Episodios
          </h2>
          <Link
            to="/episode"
            className="text-cyan-500 dark:text-lime-400 hover:underline"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      </section>
    </div>
  );
}
