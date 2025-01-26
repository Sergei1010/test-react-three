import StarRating from '../FilmRating/FilmRating'
import styles from './MovieDetails.module.scss'
import { ReactComponent as PlayIcon } from '@/assets/img/PlayIcon.svg'

const MovieDetails = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.categories}>
        <li>Drama</li>
        <li>Thriller</li>
        <li>Supernatural</li>
      </ul>
      <h2 className={styles.title}>Stranger Things</h2>
      <div className={styles.releaseContainer}>
        <span className={styles.releaseInfo__label}>2019</span>
        <div className={styles.releaseDivider}></div>
        <div>
          <span className={styles.releaseInfo__label}>DIRECTOR: </span>
          <span className={styles.releaseInfo__value}>Shawn Levy</span>
        </div>
        <div className={styles.releaseDivider}></div>
        <div>
          <span className={styles.releaseInfo__label}>seasons: </span>
          <span className={styles.releaseInfo__value}>3 (5 Episodes)</span>
        </div>
      </div>
      <div className={styles.description}>
        In 1980s Indiana, a group of young friends witness supernatural forces and secret government
        exploits. As they search for answers, the children unravel a series of extraordinary
        mysteries.
      </div>
      <StarRating rating={3} />
      <div className={styles.actionsBlock}>
        <button className={styles.actionPlay}>
          <span>STREAM NOW</span>
          <PlayIcon />
        </button>
        <button className={styles.actionEpisodes}>ALL EPISODES</button>
      </div>
    </section>
  )
}

export default MovieDetails
