

import cover1 from '../assets/image-1.jpg';
import cover2 from '../assets/image-2.jpg';
import cover3 from '../assets/image-3.jpg';

export interface Movie {
    title?: string;
    name?: string;
    cover?: string;
    poster_path?: string;
    vote_average?: number | string;
    id?: number | string;
   
}


const mockData: Movie[] = [
   

     {
        title: 'Avengers',
        cover: cover1,
    },

    {
        title: 'Missão Impossivel',
        cover: cover2,
    },

    {
        title: 'Mega Tubarão',
        cover: cover3,
    },


    {
        title: 'Avengers',
        cover: cover1,
    },

    {
        title: 'Missão Impossivel',
        cover: cover2,
    },

    {
        title: 'Mega Tubarão',
        cover: cover3,
    },

    {
        title: 'Avengers',
        cover: cover1,
    },

    {
        title: 'Missão Impossivel',
        cover: cover2,
    },

    {
        title: 'Mega Tubarão',
        cover: cover3,
    },


    {
        title: 'Avengers',
        cover: cover1,
    },

    {
        title: 'Missão Impossivel',
        cover: cover2,
    },

    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    
];

export default mockData;