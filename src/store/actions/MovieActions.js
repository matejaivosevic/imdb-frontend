import { SET_COMMENT, GET_MOVIES, SET_MOVIES, GET_MOVIE, SET_MOVIE, GET_MOVIES_BY_TITLE, LIKE_MOVIE, LIKE_MOVIE_ON_SINGLE_PAGE, SET_MOVIES_ON_LIKE, GET_MOVIES_BY_GENRE, VISIT_MOVIE, SET_SINGLE_MOVIE_ON_LIKE, ADD_COMMENT, GET_ALL_COMMENTS, SET_ALL_COMMENTS } from './ActionTypes';

export const getMovies = (page) => {
  return {
    type: GET_MOVIES,
    page
  };
};

export const visitMovie = (id) => {
  return {
    type: VISIT_MOVIE,
    id
  };
};

export const getMoviesByTitle = (page, title) => {
  return {
    type: GET_MOVIES_BY_TITLE,
    page,
    title
  };
};

export const getMoviesByGenre = (page, id) => {
  return {
    type: GET_MOVIES_BY_GENRE,
    page,
    id
  };
};

export const getMovie = (id) => {
  return {
    type: GET_MOVIE,
    id
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const setMovie = payload => {
  return {
    type: SET_MOVIE,
    payload
  };
};

export const setComment = payload => {
  return {
    type: SET_COMMENT,
    payload
  };
};

export const getAllComments = payload => {
  return {
    type: GET_ALL_COMMENTS,
    payload
  };
};

export const setAllComments = payload => {
  return {
    type: SET_ALL_COMMENTS,
    payload
  };
};

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  };
};

export const setSignleMovieOnLike = payload => {
  return {
    type: SET_SINGLE_MOVIE_ON_LIKE,
    payload
  };
};

export const likeMovie = payload => {
  return {
    type: LIKE_MOVIE,
    payload
  };
};

export const likeMovieOnSinglePage = payload => {
  return {
    type: LIKE_MOVIE_ON_SINGLE_PAGE,
    payload
  };
};

export const setMoviesOnLike = payload => {
  return {
    type: SET_MOVIES_ON_LIKE,
    payload
  };
};

