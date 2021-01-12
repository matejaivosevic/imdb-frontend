import { SET_MOVIES, SET_MOVIE, SET_MOVIES_ON_LIKE, SET_SINGLE_MOVIE_ON_LIKE, SET_COMMENT, SET_ALL_COMMENTS, SET_MOVIE_AFTER_ADD_TO_LIST, SET_MOVIES_AFTER_ADD_TO_LIST, SET_WATCH_LIST } from '../actions/ActionTypes';

const initialState = {
  all: []
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_WATCH_LIST:
      return { ...state, all: action.payload, list: action.payload };
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
    case SET_MOVIE_AFTER_ADD_TO_LIST:
      const movieCurrent = state.movie
      movieCurrent.data[0].is_in_watch_list = action.payload.data
      return { ...state, movie: movieCurrent };
    case SET_MOVIES_AFTER_ADD_TO_LIST:
      const currentList = state.all
      const id = action.payload.id
      const movieIndex = currentList.data.findIndex(movie => movie.id === id)
      currentList.data[movieIndex].is_in_watch_list = action.payload.data
      return { ...state, all: currentList };
    case SET_COMMENT:
      const newComment = action.payload[0]
      state.movie.comments.unshift(newComment)
      return { ...state, movie: state.movie };
    case SET_ALL_COMMENTS:
      const allComments = action.payload
      state.movie.comments = allComments
      return { ...state, movie: state.movie };
    default:
      return state;
  }
};

export default movieReducer;
