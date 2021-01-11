import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, GET_MOVIE, GET_MOVIES_BY_TITLE } from '../actions/ActionTypes';
import { userLogin, userLogout, userRegister } from './AuthSagas';
import { movieGet, moviesGet, moviesGetByTitle } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(GET_MOVIES_BY_TITLE, moviesGetByTitle)
  ]);
}
