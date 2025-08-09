import React, { useState } from 'react';
import Container from './Container';
import SongCard from './SongCard';
import { useSongs } from '../hooks/useSongs'; // nuevo hook

const SongList: React.FC = () => {
  const [playingSongId, setPlayingSongId] = useState<number | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const { data: songs, isLoading, error } = useSongs();

  const handlePlay = (id: number) => {
    setPlayingSongId(id);
  };

  const handlePause = () => {
    setPlayingSongId(null);
  };

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  if (isLoading) return <p>Cargando canciones...</p>;
  if (error) return <p>Error al cargar canciones</p>;

  return (
    <Container>
      <div style={styles.grid}>
        {songs?.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={playingSongId === song.id}
            isFavorite={favoriteIds.includes(song.id)}
            onPlay={() => handlePlay(song.id)}
            onPause={handlePause}
            onToggleFavorite={() => toggleFavorite(song.id)}
          />
        ))}
      </div>
    </Container>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    padding: '1rem',
    width: '100%',
  } as React.CSSProperties,
};

export default SongList;
