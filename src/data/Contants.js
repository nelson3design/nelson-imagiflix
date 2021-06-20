const URL ='https://api.themoviedb.org/3';

  const IMAGEURL ='https://image.tmdb.org/t/p';

  const APIKEY ='6e45d8bdf9da9a433bd6fb23df169507';

  const APISTRING =`?api_key=${APIKEY}&language=pt-BR`;

  const EVENTS ={
    PosterClick: 'PosterClick',
    ModalClose: 'ModalClose',
  };


  export default {
      URL, IMAGEURL, APIKEY, APISTRING, EVENTS
  };