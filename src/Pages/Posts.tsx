// src/Pages/Posts.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { musicService } from '../Services/Service';
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import { Song } from '../data/types';
import './Posts.css';

// Adaptador para convertir datos del servicio al tipo Song
const adaptServiceSongToSong = (serviceSong: any): Song => ({
  id: serviceSong.id.toString(),
  title: serviceSong.title,
  artist: serviceSong.artist,
  duration: serviceSong.duration,
  image: serviceSong.image,
  audio: serviceSong.audio || '',
});

const SongList: React.FC = () => {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const { data: rawSongs = [], isLoading, error } = useQuery({
    queryKey: ['songs'],
    queryFn: () => musicService.getAllSongs(),
  });

  const songs: Song[] = rawSongs.map(adaptServiceSongToSong);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredSongs = songs.filter((song) => {
    const term = searchTerm.trim().toLowerCase();
    return (
      song.title.toLowerCase().includes(term) ||
      song.artist.toLowerCase().includes(term)
    );
  });

  const currentSong = songs.find((song) => song.id === currentSongId) || null;

  const handlePlay = (songId: string) => {
    if (songId === currentSongId) {
      setIsPlaying(true);
    } else {
      setCurrentSongId(songId);
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="song-list-container">
      <h1>Canciones</h1>

      <label htmlFor="search">Buscar canción o artista</label>
      <input
        id="search"
        type="text"
        placeholder="Buscar canción o artista"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {isLoading && <p>Cargando canciones...</p>}
      {error && <p>Error al cargar canciones.</p>}

      <div className="song-grid">
  {filteredSongs.map((song) => (
    <SongCard
      key={song.id}
      song={song}
      isPlaying={song.id === currentSongId && isPlaying}
      isFavorite={favoriteIds.includes(song.id)}
      onPlay={() => handlePlay(song.id)}
      onPause={handlePause}
      onToggleFavorite={() => toggleFavorite(song.id)}
    />
  ))}
</div>


      {currentSong && (
        <Player
          song={currentSong}
          isPlaying={isPlaying}
          onPlay={() => handlePlay(currentSong.id)}
          onPause={handlePause}
        />
      )}
    </div>
  );
};

export default SongList;