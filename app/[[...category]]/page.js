import React from 'react';
import HomeContainer from '@/containers/home';

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchGenres,
  fetchMovieByGenre,
} from '@/services/movie';




async function HomePage({ params }) {
    const pagePromises = [
      fetchPopularMovies(),
      fetchTopRatedMovies(),
      fetchGenres(),
    ];
    if (!!params.category?.length) {
      pagePromises.push(fetchMovieByGenre(params.category[0]));
    }
  const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
    await Promise.all(pagePromises);


  let selectedCategory;
  if (params.category?.length > 0) {
    const { results } = await fetchMovieByGenre(params.category[0]);
    selectedCategory = results;

  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategoryMovies ?? [],
      }}
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
    />
  ); 
}

export default HomePage;
