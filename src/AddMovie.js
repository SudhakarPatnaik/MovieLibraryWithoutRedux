import {useState} from 'react'

const AddMovie = ({onAddMovie}) => {

const [id, setMovieId] = useState('');
const [name, setMovieName] = useState('');
const [year, setYear] = useState('');
const [rating, setRating] = useState('');

    function onClickSubmit(event){
        console.log(name,year,rating);
        onAddMovie({name,year,rating});
    }

     
 return(
     <div>
         <input type='text' placeholder='Movie Name' onChange={(e) => {setMovieName(e.target.value)}}/>
         <input type='number' placeholder='Release Year' onChange={(e) => {setYear(e.target.value)}}/>
         <input type='number' placeholder='Rating' onChange={(e) => {setRating(e.target.value)}}/>
         <input type='submit' value='Add Movie' onClick={onClickSubmit}/>
     </div>
 )
}

export default AddMovie;