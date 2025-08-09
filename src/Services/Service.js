import { musicDB, getNextId } from '../data/songs';

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const musicService = {
  async getAllSongs() {
    await delay(300);
    const stored = localStorage.getItem('musicDB');
    if (stored) {
      return JSON.parse(stored);
    }
    return [...musicDB];
  },

  async getSongById(id) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;
    const song = songs.find((s) => s.id === id.toString());
    if (!song) {
      throw new Error('Song not found');
    }
    return song;
  },

  async getSongsByArtist(artist) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!artist) {
      throw new Error('Artist parameter is required');
    }

    return songs.filter((song) =>
      song.artist.toLowerCase().includes(artist.toLowerCase())
    );
  },

  async createSong(songData) {
    await delay(400);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : [...musicDB];

    const newSong = {
      ...songData,
      id: getNextId().toString(),
      image:
        songData.image ||
        'https://static.vecteezy.com/system/resources/previews/044/601/266/original/minimalist-sound-wave-logo-modern-sound-wave-logo-music-logo-vector.jpg',
      audio: songData.audio || '',
    };

    songs.push(newSong);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return newSong;
  },

  async updateSong(id, songData) {
    await delay(400);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : [...musicDB];

    const index = songs.findIndex((s) => s.id === id.toString());
    if (index === -1) {
      throw new Error('Song not found');
    }

    songs[index] = { ...songs[index], ...songData };
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return songs[index];
  },

  async deleteSong(id) {
    await delay(300);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : [...musicDB];

    const index = songs.findIndex((s) => s.id === id.toString());
    if (index === -1) {
      throw new Error('Song not found');
    }

    songs.splice(index, 1);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return { success: true };
  },

  async searchSongs(query) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!query) return songs;

    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.duration.toLowerCase().includes(query.toLowerCase()) ||
        song.image.toLowerCase().includes(query.toLowerCase()) ||
        song.audio.toLowerCase().includes(query.toLowerCase())
    );
  },
};
