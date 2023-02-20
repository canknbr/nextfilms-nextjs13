import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';
function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { title, poster_path, overview } = movie;
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ''
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButton}>
        <Link href={`/movie/${movie.id}`} className={styles.playButton}>Play</Link>
        <button className={styles.addButton}>
            <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
        unoptimized
        fill
        alt={title}
        src={`https://image.tmdb.org/t/p/${poster_path}`}
/>
      </div>
    </div>
  );
}

export default FeaturedMovie;
