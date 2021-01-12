import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setAllComments, setComment, setMovie, setMovieAfterAddToList, setMovies, setMoviesAfterAddToList, setMoviesOnLike, setPopular, setSignleMovieOnLike, setWatchList } from '../actions/MovieActions';

export function* moviesGet(payload) {
  try {
    const { data } = yield call(movieService.getMovies, payload.page);
    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* watchListGet() {
  try {
    const { data } = yield call(movieService.getWatchList);
    yield put(setWatchList(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* popularGet() {
  try {
    const { data } = yield call(movieService.getPopular);
    yield put(setPopular(data));
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

export function* addToWatchListSinglePage(payload) {
  try {
    const { data } = yield call(movieService.watch, payload);
    yield put(setMovieAfterAddToList(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* addToWatchList(payload) {
  try {
    const { data } = yield call(movieService.watch, payload);
    yield put(setMoviesAfterAddToList(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* commentAdd(payload) {
  try {
    const { data } = yield call(movieService.createComment, payload);
    yield put(setComment(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* movieOnSinglePageLike(payload) {
  try {
    const { data } = yield call(movieService.likeMovie, payload);
    yield put(setSignleMovieOnLike(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesGetByTitle(payload) {
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

export function* commentsGet(payload) {
  try {
    const { data } = yield call(movieService.getComments, payload.payload);
    yield put(setAllComments(data));
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
