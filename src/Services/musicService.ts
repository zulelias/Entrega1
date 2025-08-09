import { Song } from '../data/songs';

// ✅ Función para obtener todas las canciones
export const getAllSongs = async (): Promise<Song[]> => {
  const response = await fetch("http://localhost:3000/songs");
  if (!response.ok) {
    throw new Error("Error al obtener las canciones");
  }
  return await response.json();
};

// ✅ Función para obtener una canción por ID
export const getSongById = async (id: number): Promise<Song> => {
  const response = await fetch(`http://localhost:3000/songs/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener la canción");
  }
  return await response.json();
};

// ✅ Función para crear una nueva canción
export const createSong = async (songData: Partial<Song>): Promise<Song> => {
  const response = await fetch("http://localhost:3000/songs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(songData),
  });
  if (!response.ok) {
    throw new Error("Error al crear la canción");
  }
  return await response.json();
};

// ✅ Exportación agrupada opcional
export const musicService = {
  getSongs: getAllSongs,
  getSongById,
  createSong,
};
