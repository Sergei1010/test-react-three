import Background from './components/Background/Background'
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
      <Background />
    </>
  )
}

export default App
