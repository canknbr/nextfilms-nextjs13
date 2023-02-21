import React from 'react'
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'




function HomeContainer({selectedCategory,popularMovies=[],topRatedMovies=[],categories=[]}) {

  return (
    <div>
        <FeaturedMovie movie={topRatedMovies?.[0]} />
        <Categories categories = {categories.slice(0,8)} />
     {
      selectedCategory.movies.length > 0 && 
      <MoviesSection movies={selectedCategory.movies} title={
        categories.find(genre => `${genre.id}` === selectedCategory.id).name
      } />
     }

        <MoviesSection movies={popularMovies.slice(1,7)} title="Popular Films"/>

        <MoviesSection title="Your Favorites" movies={topRatedMovies.slice(7,13)}/> 
    </div>
  )
}

export default HomeContainer