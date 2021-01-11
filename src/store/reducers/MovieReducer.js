import { all } from 'redux-saga/effects';
import { SET_MOVIES, SET_MOVIE, SET_MOVIES_ON_LIKE } from '../actions/ActionTypes';

const initialState = {
  all: []
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return { ...state, movie: action.payload };
    case SET_MOVIES_ON_LIKE:
      const editedMovie = action.payload[0];
      const editedMovieIndex = state.all.data.findIndex(movie => movie.id === editedMovie.id)
      state.all.data[editedMovieIndex] = editedMovie
      const newAll = state.all
      return { ...state, all: newAll };
    default:
      return state;
  }
};

export default movieReducer;
