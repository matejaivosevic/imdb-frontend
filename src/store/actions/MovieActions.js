import { GET_MOVIES, SET_MOVIES, GET_MOVIE, SET_MOVIE, GET_MOVIES_BY_TITLE } from './ActionTypes';

export const getMovies = (page) => {
  return {
    type: GET_MOVIES,
    page
  };
};

export const getMoviesByTitle = (page, title) => {
  return {
    type: GET_MOVIES_BY_TITLE,
    page,
    title
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
