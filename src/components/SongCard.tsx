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
  onPlay: () => void;
  onPause: () => void;
};

const SongCard: React.FC<Props> = ({ song, isPlaying, onPlay, onPause }) => {
  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <p>{song.duration}</p>

      <button onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
      </button>
    </div>
  );
};

export default SongCard;

