import React, {useState,useEffect} from 'react';
import emitter from './utils/eventEmitter';
import CONTS from './data/Contants';
import './App.css';
import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Modal from './components/Modal';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Titletype ={
  Movie:'movie',
  Serie:'tv',

}

export interface Title {
  type: Titletype;

  id: number | string;

}

const App = () => {

  const { URL, APISTRING} = CONTS;
  
  const [movies, setMovies]= useState();

  const [series, setSeries]= useState();

   const [title, setTitle]= useState();

  const [loading, setLoading]= useState(true);

 
  const getFeaturedMovie =() => movies && movies?.results[0];

  const getMovieList =() =>{
    if (movies) {
      const [featured, ...movieList]= movies?.results;
      return movieList;
    }
    return [];
  };

  const getTitle = async ({type, id}: Title) =>{

      const title = await fetch (`${URL}/${type}/${id}${APISTRING}`);
      const titleData = await title.json();
      setTitle(titleData);

  }

   useEffect(() =>{

    emitter.addListener(CONTS.EVENTS.PosterClick, getTitle);

    emitter.addListener(CONTS.EVENTS.ModalClose, ()=> setTitle(false));

    const fetchData = async () =>{

      const movies = await fetch (`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await movies.json();
      setMovies(moviesData);


      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await series.json();
      setSeries(seriesData);

      setLoading(false)

      
    }

    fetchData();
  }, []);

  useEffect(() => title && console.log(title), [title] );


  return (
    <div className=" bg-black text-white m-auto antialised font-sans ">
      {loading && (
        <>
        <Loading/>
        <Navbar />
        </>
      )}


    {!loading &&(
      <>

      <Hero {...getFeaturedMovie()} />
      <Navbar />
      <Carousel title='Filmes Populares' data={getMovieList()} />
      <Carousel title='Séries Populares' data={series?.results} />
      </>
    ) }
    <Footer/>
    { title && <Modal {...title}/>}
   </div>
  );
}

export default App;
