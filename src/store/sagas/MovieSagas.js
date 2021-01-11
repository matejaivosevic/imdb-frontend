import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovie, setMovies, setMoviesOnLike } from '../actions/MovieActions';

export function* moviesGet(payload) {
  try {
    const { data } = yield call(movieService.getMovies, payload.page);
    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* movieLike(payload) {
  try {
    const { data } = yield call(movieService.likeMovie, payload);
    yield put(setMoviesOnLike(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* movieOnSinglePageLike(payload) {
  try {
    const { data } = yield call(movieService.likeMovie, payload);
    yield put(setMovie(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesGetByTitle(payload) {
  console.log(payload)
  try {
    const { data } = yield call(movieService.getMoviesByTitle, payload.page, payload.title);
    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesGetByGenre(payload) {
  try {
    const { data } = yield call(movieService.getMoviesByGenre, payload.page, payload.id);
    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* movieGet(payload) {
  try {
    const { data } = yield call(movieService.getMovie, payload.id);
    yield put(setMovie(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* movieVisit(payload) {
  try {
    const { data } = yield call(movieService.visitMovie, payload.id);
    yield put(setMovie(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}
