import React from 'react'
import styles from './FilmRating.module.scss' // Импорт SCSS модуля

const FilmRating = ({ rating }) => {
  const totalStars = 5

  const stars = Array.from({ length: totalStars }, (_, index) => {
    const isFilled = index < rating
    return (
      <span
        key={index}
        className={isFilled ? styles.filled : styles.empty}
        aria-label={isFilled ? 'Filled star' : 'Empty star'}
      >
        ★
      </span>
    )
  })

  return <div className={styles.starRating}>{stars}</div>
}

export default FilmRating
