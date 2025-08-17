// hooks/useSong.ts
import { useQuery } from '@tanstack/react-query';
import { getAllSongs } from '../services/musicService';
import { Song } from '../data/songs'; // Ajustá el path si tu tipo está en otro lado

export const useSong = () => {
  return useQuery<Song[]>({
    queryKey: ['songs'],
    queryFn: getAllSongs,
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });
};

