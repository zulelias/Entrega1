// src/components/SongCard.tsx
import React from 'react';
import './SongCard.css';

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  image: string;
  audio: string;
};

type Props = {
  song: Song;
  isPlaying: boolean;
  isFavorite: boolean;
  onPlay: () => void;
  onPause: () => void;
  onToggleFavorite: () => void;
};

const SongCard: React.FC<Props> = ({
  song,
  isPlaying,
  isFavorite,
  onPlay,
  onPause,
  onToggleFavorite,
}) => {
  return (
    <div className="song-card" style={{ border: '2px solid gray', padding: '1rem' }}>
      <h3 style={{ color: 'black' }}>Título: {song.title}</h3>
      <p style={{ color: 'black' }}>Artista: {song.artist}</p>
      <p>Duración: {song.duration}</p>
      <img src={song.image} alt={song.title} width="150" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
        <button onClick={isPlaying ? onPause : onPlay}>
          {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
        </button>
        <button onClick={onToggleFavorite} style={{ fontSize: '1.5rem', background: 'none', border: 'none' }}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default SongCard;

