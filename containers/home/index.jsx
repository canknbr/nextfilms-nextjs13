import React from 'react'
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'
import Movies from '../../mocks/movies.json'
import categories from '../../mocks/genres.json'


function HomeContainer() {


  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]} />
        <Categories categories = {categories.genres.slice(0,8)} />
        <MoviesSection movies={Movies.results.slice(1,7)} title="Popular Films"/>
        <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,13)}/> 
    </div>
  )
}

export default HomeContainer