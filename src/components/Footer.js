import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer=() =>{
    const today = new Date();
    return(

    <footer className='footer px-20 pb-6 '>
        <div className=''>
                <FontAwesomeIcon className='mr-4 cursor-pointer opacity-40 hover:opacity-100'  icon={faFacebookSquare} size='2x' />

                <FontAwesomeIcon className='mr-4 cursor-pointer opacity-40 hover:opacity-100' icon={faInstagram} size='2x'/>

                <FontAwesomeIcon className='mr-4 cursor-pointer opacity-40 hover:opacity-100' icon={faTwitter} size='2x'/>

                <FontAwesomeIcon className=' cursor-pointer opacity-40 hover:opacity-100' icon={faYoutube} size='2x'/>

        </div>

            <div className='footer-content grid grid-cols-4 gap-2 my-6 '>

      
                <a href='#' className='opacity-40 hover:underline '>Idiomas e legendas</a>
                <a href='#' className='opacity-40 hover:underline '>Audiodescrição</a>
                <a href='#' className='opacity-40 hover:underline '>Centro de ajuda</a>
                <a href='#' className='opacity-40 hover:underline '>cartão pré-pago</a>
           
       
                <a href='#' className='opacity-40 hover:underline '>Imprensa</a>
                <a href='#' className='opacity-40 hover:underline '>Relaçao com investidores</a>
                <a href='#' className='opacity-40 hover:underline '>Carreiras</a>
         
                <a href='#' className='opacity-40 hover:underline '>Termos de uso</a>
                <a href='#' className='opacity-40 hover:underline '>Privacidade</a>
                <a href='#' className='opacity-40 hover:underline '>Avisos legais</a>
         
                <a href='#' className='opacity-40 hover:underline '>Preferências de cookies</a>
                <a href='#' className='opacity-40 hover:underline '>Informações corporativas</a>
                <a href='#' className='opacity-40 hover:underline '>Entre em contato</a>
              
          


        </div>

            <p className='opacity-40'>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>

    </footer>

)};

export default Footer