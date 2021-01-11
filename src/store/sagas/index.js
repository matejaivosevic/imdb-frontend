import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, GET_MOVIE, GET_MOVIES_BY_TITLE, LIKE_MOVIE, LIKE_MOVIE_ON_SINGLE_PAGE, GET_MOVIES_BY_GENRE, VISIT_MOVIE, ADD_COMMENT, GET_ALL_COMMENTS } from '../actions/ActionTypes';
import { userLogin, userLogout, userRegister } from './AuthSagas';
import { commentAdd, commentsGet, movieGet, movieLike, movieOnSinglePageLike, moviesGet, moviesGetByGenre, moviesGetByTitle, movieVisit } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(GET_MOVIES_BY_TITLE, moviesGetByTitle),
    takeLatest(LIKE_MOVIE, movieLike),
    takeLatest(LIKE_MOVIE_ON_SINGLE_PAGE, movieOnSinglePageLike),
    takeLatest(GET_MOVIES_BY_GENRE, moviesGetByGenre),
    takeLatest(VISIT_MOVIE, movieVisit),
    takeLatest(ADD_COMMENT, commentAdd),
    takeLatest(GET_ALL_COMMENTS, commentsGet)
  ]);
}
