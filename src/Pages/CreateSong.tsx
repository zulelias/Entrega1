// src/Pages/CreateSong.tsx
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { musicService } from '../services/Service';

const CreateSong: React.FC = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [duration, setDuration] = useState('');
  const [audio, setAudio] = useState('');
  const [image, setImage] = useState('');

  const mutation = useMutation({
    mutationFn: (newSong: {
      title: string;
      artist: string;
      duration: string;
      audio: string;
      image: string;
    }) => musicService.createSong(newSong),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
      setTitle('');
      setArtist('');
      setDuration('');
      setAudio('');
      setImage('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      title,
      artist,
      duration,
      image,
      audio,
    });
  };

  return (
    <div>
      <h2>Agregar nueva canción</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Artista:
          <input value={artist} onChange={(e) => setArtist(e.target.value)} required />
        </label>
        <label>
          Duración (ej. 03:45):
          <input value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </label>
        <label>
          URL del audio:
          <input value={image} onChange={(e) => setAudio(e.target.value)} />
        </label>
        <label>
          URL de la imagen:
          <input value={audio} onChange={(e) => setImage(e.target.value)} />
        </label>
        <button type="submit" disabled={mutation.status === 'pending'}>
          {mutation.status === 'pending' ? 'Guardando...' : 'Guardar Canción'}
        </button>
      </form>
    </div>
  );
};

export default CreateSong;
