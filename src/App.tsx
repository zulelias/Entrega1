import React, { useState } from 'react';
import SongCard from './components/SongCard';
import Player from './components/Player';
import './App.css';

const songs = [
  {
    id: '1',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: '3:04',
    image: '/images/imagine.jpg',
    audio: '/audio/ImagineLennon.mp3',
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: '5:55',
    image: '/images/queen.jpg',
    audio: '/audio/BRhapsody.mp3',
  },
  {
    id: '3',
    title: 'Set Fire to the Rain',
    artist: 'Adele',
    duration: '4:01',
    image: '/images/adele.jpg',
    audio: '/audio/SetFireRain.mp3',
  },
  {
    id: '4',
    title: 'I Can Only Imagine',
    artist: 'J. Michael Finley',
    duration: '4:09',
    image: '/images/MichaelFinley.jpg',
    audio: '/audio/ICanOnlyImagine.mp3',
  },
  {
    id: '5',
    title: 'El Guardaespaldas',
    artist: 'Whitney Houston',
    duration: '4:53',
    image: '/images/Guardaespalda.jpg',
    audio: '/audio/Guardaespaldas.mp3',
  },
  {
    id: '6',
    title: 'The Sound Of Silence',
    artist: 'Disturbed',
    duration: '4:08',
    image: '/images/Disturbed.jpg',
    audio: '/audio/SoundSilence.mp3',
  },
  {
    id: '7',
    title: 'Firework',
    artist: 'Katy Perry',
    duration: '3:54',
    image: '/images/FireworkKaty.jpg',
    audio: '/audio/Firework.mp3',
  },
];

function App() {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPlaying, setIsPlaying] = useState(false); // ⬅ estado separado

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
      setIsPlaying(true); // Reanudar si es la misma
    } else {
      setCurrentSongId(songId); // Cambiar de canción
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="App" style={{ paddingBottom: '80px' }}>
      <h1>🎵 Lista de Canciones</h1>

      <input
        type="text"
        placeholder="Buscar canción por título o artista..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '1rem', width: '80%' }}
      />

      <div className="song-list">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              isPlaying={isPlaying && currentSongId === song.id}
              onPlay={() => handlePlay(song.id)}
              onPause={handlePause}
            />
          ))
        ) : (
          <p>No se encontraron canciones.</p>
        )}
      </div>

      <Player
        song={currentSong}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={handlePause}
      />
    </div>
  );
}

export default App;
