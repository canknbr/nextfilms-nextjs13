import React from 'react'
import styles from './styles.module.css'
import Skeleton from '../skeleton'
function MovieSectionLoading() {
  return <div className={styles.movieSection}>
    <Skeleton height={36} width={128} />
    <div className={styles.movies}>
        {Array(8).fill(null).map((_, index) => (
            <Skeleton key={index}/>
        ))}
    </div>
  </div>;
}

export default MovieSectionLoading