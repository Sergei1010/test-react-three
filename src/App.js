import Header from './components/Header/Header'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PopularMovies from './components/PopularMovies/PopularMovies'
const App = () => {
  return (
    <>
      <Header />
      <main>
        <MovieDetails />
        <PopularMovies />
      </main>
    </>
  )
}

export default App
