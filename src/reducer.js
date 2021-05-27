import * as actions from './actionTypes';

export default function reducer(state=[], action) {

    switch(action.type) {
        case actions.VIEW_MOVIES : 
        return state;

        case actions.DELETE_MOVIE :
            return state.filter(movie => movie.id !== action.payload.id) ;

        case actions.ADD_MOVIE :
            return [...state, 
                {id: action.payload.id, name : action.payload.movieName, year : action.payload.year}
            ];

        case actions.UPDATE_MOVIE :
            return state;

        default : return state;
    }
}