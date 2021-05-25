import logo from './logo.svg';
import './App.css';
import MoviesTable from './MoviesTable';
import AddMovie from './AddMovie';
import movies from './moviesDB.json'

function App() {

  const onAddMovie = (movie) => {
    console.log('onAddMovie');
    console.log('before', movies);
    movies.push(movie);
    console.log('after',movies);
  }

  function updateMovieMain(){

  }

  return (
    <div className="App">
      <h1>MOVIE LIBRARY</h1>
      <header className="App-header">
        <h3>Movies in Store</h3>
        <AddMovie onAddMovie={onAddMovie}></AddMovie>
        <MoviesTable updateMovieMain={updateMovieMain}></MoviesTable>
        
      </header>
    </div>
  );
}

export default App;
