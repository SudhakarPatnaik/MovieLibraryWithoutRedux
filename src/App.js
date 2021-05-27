import './App.css';
import MoviesTable from './MoviesTable';
import AddMovie from './AddMovie';
import {useState, useEffect} from 'react'
import store from './store';
import {addMovies, deleteMovies} from './actions';

function App() {

  const[moviesList , setMoviesList] = useState([]);
  const[refresh , setRefresh] = useState([false]);

  const unsubscribe = store.subscribe(()=>{
    console.log('*******STORE CHANGED*********')
  })

  useEffect(() => {     
    console.log('store.getState() : ',store.getState());
    setMoviesList(store.getState());
    setRefresh(false);  
  }, [refresh])

  const addMovie = (movieData) => {
    store.dispatch(
      addMovies(movieData,store.getState().length + 1)
    );
    setRefresh(true);       
  }

  const onUpdate = async(movieData) => {
    console.log(movieData)

    //store.getState().find(movie => movie.id == movieData.id)


    await fetch(`http://localhost:5000/movieslist/${movieData.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })

    setRefresh(true);            
  }

  const deleteMovie = (id) => {
    unsubscribe();
    store.dispatch(
     deleteMovies(id)
    );
    setRefresh(true);
  }

  return (
    <div className="App">
      <h1>MOVIE LIBRARY</h1>
      <header className="App-header">
        <h3>Movies in Store</h3>
        <AddMovie onAddMovie={addMovie}></AddMovie>
        <MoviesTable movies={moviesList} onDelete={deleteMovie} onUpdate={onUpdate}></MoviesTable>
      </header>
    </div>
  );
}

export default App;
