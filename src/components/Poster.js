import React from 'react';
import emitter from '../utils/eventEmitter';

import CONTS from '../data/Contants';

import {Title, Titletype} from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

import Score from './Score';

import { Movie } from '../data/Mock';

const Poster = ({ cover, poster_path, title, name, vote_average, id }: Movie, index: number) => {

    const {IMAGEURL}=CONTS;

    const handleClick =() =>{
        const type= title? Titletype.Movie : Titletype.Serie;

      

        emitter.emit(CONTS.EVENTS.PosterClick, {type, id});
    };




    return(
    <article className='relative transition-all duration-500 ease-in-out transform hover:scale-110' key={index} onClick={handleClick}>
            <img src={poster_path ? `${IMAGEURL}/w200/${poster_path}` :cover} alt={title? title : name} />

        <div className='cursor-pointer poster absolute inset-0 w-full h-full px-2 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out
        opacity-0'>

        <FontAwesomeIcon icon={faPlayCircle} size='5x'/>
        
        <h2 className='text-2xl text-center'>{title ? title : name}</h2>

            <Score value={vote_average}/>

        </div>


    </article>
)};


export default Poster;