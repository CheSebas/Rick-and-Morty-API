const API_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page = 1, filters = {}) {
  const params = new URLSearchParams({ page });

  // Agregar filtros dinámicamente
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?${params}`
  );
  return await res.json();
}

export async function getLocations(page = 1, filters = {}) {
  const params = new URLSearchParams({ page });

  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const res = await fetch(`https://rickandmortyapi.com/api/location?${params}`);
  return await res.json();
}

export async function getEpisodes(page = 1, filters = {}) {
  const params = new URLSearchParams({ page });

  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const res = await fetch(`https://rickandmortyapi.com/api/episode?${params}`);
  return await res.json();
}
