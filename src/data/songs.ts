// src/data/songs.js
import bohemianImg from '../assets/queen.jpg';
import billieJeanImg from '../assets/billie-jean.jpg';
import shapeOfYouImg from '../assets/shape-of-you.jpg';
import imagineImg from '../assets/imagine.jpg';
import rollingInTheDeepImg from '../assets/rolling-in-the-deep.jpg';
import loseYourselfImg from '../assets/lose-yourself.jpg';
import smellsLikeTeenSpiritImg from '../assets/smells-like-teen-spirit.jpg';

export const songs = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: '5:55',
    image: bohemianImg
  },
  {
    id: '2',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: '4:54',
    image: billieJeanImg
  },
  {
    id: '3',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '4:20',
    image: shapeOfYouImg
  },
  {
    id: '4',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: '3:14',
    image: imagineImg     // <== corregido
  },
  {
    id: '5',
    title: 'Rolling in the Deep',
    artist: 'Adele',
    duration: '3:48',
    image: rollingInTheDeepImg
  },
  {
    id: '6',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: '5:26',
    image: loseYourselfImg
  },
  {
    id: '7',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    duration: '5:01',
    image: smellsLikeTeenSpiritImg
  }
];