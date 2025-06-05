import React from 'react';
import Container from './Container';
import SongCard from './SongCard';
import { songs } from '../data/songs'; // Ajustá la ruta según dónde esté tu archivo

const SongList: React.FC = () => {
  return (
    <Container>
      <div style={styles.grid}>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
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
  } as React.CSSProperties,
};

export default SongList;