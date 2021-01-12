import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, GET_MOVIE, GET_MOVIES_BY_TITLE, LIKE_MOVIE, LIKE_MOVIE_ON_SINGLE_PAGE, GET_MOVIES_BY_GENRE, VISIT_MOVIE, ADD_COMMENT, GET_ALL_COMMENTS, ADD_TO_WATCH_LIST_SINGLE_PAGE, ADD_TO_WATCH_LIST, GET_WATCH_LIST, GET_POPULAR } from '../actions/ActionTypes';
import { userLogin, userLogout, userRegister } from './AuthSagas';
import { addToWatchList, addToWatchListSinglePage, commentAdd, commentsGet, movieGet, movieLike, movieOnSinglePageLike, moviesGet, moviesGetByGenre, moviesGetByTitle, movieVisit, popularGet, watchListGet } from './MovieSagas';

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
    takeLatest(GET_ALL_COMMENTS, commentsGet),
    takeLatest(ADD_TO_WATCH_LIST_SINGLE_PAGE, addToWatchListSinglePage),
    takeLatest(ADD_TO_WATCH_LIST, addToWatchList),
    takeLatest(GET_WATCH_LIST, watchListGet),
    takeLatest(GET_POPULAR, popularGet)
  ]);
}
