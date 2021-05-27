import movies from './moviesDB.json'

//function MoviesTable() {  // either like this
const MoviesTable = ({updateMovieMain}) => { //or like this

    const deleteMovie = () => {
        console.log('delete movie');
    }

    const updateMovie = () => {
        updateMovieMain();
    }

    return (
        <table >
            <tr>
                <th>Movie Name</th>
                <th>Year</th>
                <th>Rating</th>
            </tr>
            {movies.map((movie) => (
                <tr>
                    <td id={movie.id}>{movie.name}</td>
                    <td id={movie.id}>{movie.year}</td>
                    <td id={movie.id}>{movie.rating}</td>
                    <td id={movie.id}>
                        <input type='button' value='Delete' onClick={deleteMovie}/>
                        <input type='button' value='Update' onClick={updateMovie}/>
                    </td>
                </tr>
            ))
            }
        </table>
    );
}

export default MoviesTable;