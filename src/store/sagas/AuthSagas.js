import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';

import { authUser, loginError, registerError } from '../actions/AuthActions';
import AuthService from '../../services/AuthService';
import { ROUTES } from '../../routes';

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push(ROUTES.HOME));
    yield put(go());
  } catch (error) {
    yield put(loginError(true));
  }
}

export function* userLogout({ payload }) {
  try {
    yield call(AuthService.logout, payload);

    yield put(authUser(false));
    yield put(push(ROUTES.LOGIN));
  } catch (error) {
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);

    yield put(push(ROUTES.LOGIN));
    yield put(go());
  } catch (error) {
    yield put(registerError(true));
  }
}
