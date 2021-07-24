import React from 'react';
import emitter from '../utils/eventEmitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import CONTS from '../data/Contants';

import Score from './Score';
import '../App.css';

const Modal = ({poster_path, title, name,  original_title, overview, vote_average, runtime, video, original_name, number_of_seasons}) =>{

    const handleClick = () =>{
        emitter.emit(CONTS.EVENTS.ModalClose)
    }
    const {IMAGEURL} =CONTS;

return(
<div className='modal-base fixed top-0 left-0 p-12  grid place-items-center w-full h-screen'>

    <article className=' modal w-full h-full grid grid-flow-col auto-cols-2 bg-black shadow-lg opacity-90 p-8'>

    <img className='modal-img w-4/5 h-full' src={`${IMAGEURL}/w500/${poster_path}`} alt={title? title :name} />

    <div className=' modal-itens '>
        <FontAwesomeIcon className=' modal-close absolute top-16 right-16 cursor-pointer text-red-600' icon={faTimes}  size='2x' onClick={handleClick} />

        <h2 className='text-3xl font-bold'>{title? title :name}</h2>

        <h6 className=' font-bold italic'>{original_title ? original_title : original_name}</h6>

        <p className=' font-bold py-8'>{overview}</p>

        <div className='flex gap-5'>
        <Score value={vote_average}/>
        <span className=' bg-red-600 rounded py-2 px-4'>{runtime? `${runtime}min` :`${number_of_seasons} temporadas`}</span>
        </div>
    </div>
    </article>
</div>
)}

export default Modal;