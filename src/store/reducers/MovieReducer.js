import { SET_MOVIES, SET_MOVIE, SET_MOVIES_ON_LIKE, SET_SINGLE_MOVIE_ON_LIKE, SET_COMMENT, SET_ALL_COMMENTS } from '../actions/ActionTypes';

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
    case SET_SINGLE_MOVIE_ON_LIKE:
      const likedMovie = action.payload[0];
      const comments = state.movie['comments']
      const newMovie = { 'comments': [], 'data': [] }
      newMovie['data'].push(likedMovie)
      newMovie['comments'] = comments
      return { ...state, movie: newMovie };
    case SET_COMMENT:
      const newComment = action.payload[0]
      state.movie.comments.unshift(newComment)
      return { ...state, movie: state.movie };
    case SET_ALL_COMMENTS:
      console.log(action.payload)
      const allComments = action.payload
      state.movie.comments = allComments
      return { ...state, movie: state.movie };
    default:
      return state;
  }
};

export default movieReducer;
