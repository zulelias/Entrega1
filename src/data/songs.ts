export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  image: string;
  audio: string;
};

const musicDB: Song[] = [
  {
    id: '1',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: '3:04',
    image: '/images/imagine.jpg',
    audio: '/audio/ImagineLennon.mp3',
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: '5:55',
    image: '/images/queen.jpg',
    audio: '/audio/BRhapsody.mp3',
  },
  {
    id: '3',
    title: 'Set Fire to the Rain',
    artist: 'Adele',
    duration: '4:01',
    image: '/images/adele.jpg',
    audio: '/audio/SetFireRain.mp3',
  },
  {
    id: '4',
    title: 'I Can Only Imagine',
    artist: 'J. Michael Finley',
    duration: '4:09',
    image: '/images/MichaelFinley.jpg',
    audio: '/audio/ICanOnlyImagine.mp3',
  },
  {
    id: '5',
    title: 'El Guardaespaldas',
    artist: 'Whitney Houston',
    duration: '4:53',
    image: '/images/Guardaespalda.jpg',
    audio: '/audio/Guardaespaldas.mp3',
  },
  {
    id: '6',
    title: 'The Sound Of Silence',
    artist: 'Disturbed',
    duration: '4:08',
    image: '/images/Disturbed.jpg',
    audio: '/audio/SoundSilence.mp3',
  },
  {
    id: '7',
    title: 'Firework',
    artist: 'Katy Perry',
    duration: '3:54',
    image: '/images/FireworkKaty.jpg',
    audio: '/audio/Firework.mp3',
  },
];

export { musicDB };

let currentId = musicDB.length;

export const getNextId = (): string => {
  currentId += 1;
  return currentId.toString();
};

 