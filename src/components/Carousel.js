import React from 'react';

import '../App.css';
import Slick from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



import mockData, {Movie} from '../data/Mock';

import Poster from './Poster';
import './Carousel.css'

interface CarouselData {
    title?: String;
    data?: Movie[];
}

const Carousel = ({ title ='Filmes em destaqe ', data = mockData}: CarouselData) =>{


    const Direction={
        left:0,
        right:1,
    }

    

    const SlickArrow =({direction, onClick}) => (

        <button type='button' className={`absolute w-16 h-full bg-black bg-opacity-50 z-10 top-0  ${direction ? 'right-0' : 'left-0'}`}
            onClick={onClick}>

            <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='4x' />

            

        </button>


    )



    const settings = {
        dots: true,
        infinite: true,
      
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left}/>,
        nextArrow: <SlickArrow direction={Direction.right}/>,

         
    };


    return( 

        <section className='carousel' >

            <h2 className='title relative font-bold text-4xl pl-20'>{title}</h2>

        <Slick className='relative mb-8' {...settings}>

         {data.map((movie, index) => Poster(movie, index))}
        
       </Slick>
        </section>

    );
        

};


export default Carousel;