import React from 'react';
import '../App.css';
import CONTS from '../data/Contants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

import placeholder from '../assets/fundo.jpg';

import Score from './Score';


const Hero = ({ backdrop_path = null, title='Avengers Endgame', vote_average='10'}) => {
  
  const {IMAGEURL}= CONTS;
  return(

 
    <header className=" hero relative min-h-screen -mb-64">
        <img className='object-cover object-center h-full w-full text-white' src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` :placeholder} alt='filme em destaque'/>

      <div className='absolute bottom-0 w-full h-full  bg-gradient-to-t bg-transparent  from-black  '></div>

        <article className=' hero-content absolute bottom-96 px-20'>
            <h4 className="text-2xl mb-4">Assista agora:</h4>

          <h2 className="text-5xl font-bold">{title}</h2>

      <div className='flex items-center  mt-5 gap-1'>
            <p className=' text-base '>Nota{' '}</p>
            <p><Score value={vote_average} /></p>

          </div>



        <div className='mt-5'>

          <button className='text-base bg-black bg-opacity-50 px-8 py-1 rounded transition-all duration-300 ease-in-out
                hover:bg-white hover:opacity-75 hover:text-black '><FontAwesomeIcon className='mr-4' icon={faPlay} />  Assistir</button>

          <button className='text-base bg-black bg-opacity-50 px-8 py-1 rounded ml-5 transition-all duration-300 ease-in-out
          hover:bg-white hover:opacity-75 hover:text-black '><FontAwesomeIcon className='mr-4' icon={faPlus} />  Minha Lista</button>
            </div>
         
        </article>
    </header>

    

)};

export default Hero;