import styles from './PopularMovies.module.scss'
import image1 from '@/assets/img/movies/1.png'
import image2 from '@/assets/img/movies/2.png'
import image3 from '@/assets/img/movies/3.png'
import image4 from '@/assets/img/movies/4.png'
import image5 from '@/assets/img/movies/5.png'
import image6 from '@/assets/img/movies/6.png'
import { ReactComponent as IconPrev } from '@/assets/img/ArrowLeft.svg'
import { ReactComponent as IconNext } from '@/assets/img/ArrowRight.svg'

const PopularMovies = () => {
  const moviesList = [
    { url: image1, alt: 'Фільм 1' },
    { url: image2, alt: 'Фільм 2' },
    { url: image3, alt: 'Фільм 3' },
    { url: image4, alt: 'Фільм 4' },
    { url: image5, alt: 'Фільм 5' },
    { url: image6, alt: 'Фільм 6' },
  ]

  return (
    <section className={styles.container}>
      <div className={styles.moviesWrapper}>
        <div className={styles.navigation}>
          <h2 className={styles.title}>POPULAR THIS WEEK</h2>
          <div className={styles.buttons}>
            <button>
              <IconPrev className={styles.buttonPrev} />
            </button>
            <button>
              <IconNext className={styles.buttonNext} />
            </button>
          </div>
        </div>

        <div className={styles.listWraper}>
          <ul className={styles.list}>
            {moviesList.map((movie, i) => {
              return (
                <li className={styles.item}>
                  <img src={movie.url} alt={movie.alt} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={styles.warning}>16+</div>
    </section>
  )
}
export default PopularMovies
