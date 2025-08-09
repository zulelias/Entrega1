// src/utils/adaptSong.ts
import { ServiceSong, Song } from '../data/types';

export const adaptSong = (serviceSong: ServiceSong): Song => ({
  id: serviceSong.id.toString(),
  title: serviceSong.title,
  artist: serviceSong.artist,
  duration:serviceSong.duration,
  image: serviceSong.image,
  audio: serviceSong.audio[0] ?? '',
});
