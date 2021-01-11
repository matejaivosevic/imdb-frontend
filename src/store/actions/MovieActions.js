import { GET_MOVIES, SET_MOVIES, GET_MOVIE, SET_MOVIE, GET_MOVIES_BY_TITLE, LIKE_MOVIE, LIKE_MOVIE_ON_SINGLE_PAGE, SET_MOVIES_ON_LIKE, GET_MOVIES_BY_GENRE, VISIT_MOVIE } from './ActionTypes';

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

