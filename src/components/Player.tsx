import React, { useRef, useState, useEffect } from 'react';
import './Player.css';

interface Song {
  title: string;
  artist?: string;
  duration?: string;
  audio: string;
}

interface PlayerProps {
  song: Song | null;
  isPlaying: boolean;
  onPause: () => void;
  onPlay: () => void;
}

const Player: React.FC<PlayerProps> = ({ song, isPlaying, onPause, onPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Nuevo estado

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [song]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, song]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);
    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [song]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setProgress(0);
      onPause(); // forzamos estado externo en pausa
    }
  };
 
  if (!song) return null;

  return (
    <div className="player">
      <audio ref={audioRef} src={song.audio} preload="metadata" />

      <div className="player-info">
        <div className="player-title">{song.title}</div>
        {song.artist && <div className="player-artist">{song.artist}</div>}
        {song.duration && <div className="player-duration">{song.duration}</div>}
      </div>

      <div className="player-slider">
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSliderChange}
        />
      </div>

      <div className="player-volume">
        🔉
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      <button className="player-button" onClick={handleStop}>⏹</button>

      <button className="player-button" onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
};

export default Player;