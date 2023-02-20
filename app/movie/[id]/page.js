import React from 'react'
import {notFound} from 'next/navigation'
import MovieContainer from '@/containers/movie';
import Movies from '../../../mocks/movies.json';
function MoviePage({params}) {
const {results} = Movies;
const movieDetails = results.find((movie) => movie.id.toString() === params.id);
if(!movieDetails) return notFound();

  return (
    <MovieContainer movie={movieDetails} />
  )
}

export default MoviePage;