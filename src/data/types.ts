// src/data/types.ts

export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string
  image: string;
  audio: string;
};

export type ServiceSong = {
  id: number;
  title: string;
  artist: string;
  duration:string
  image: string;
  audio: string[];
 
};
