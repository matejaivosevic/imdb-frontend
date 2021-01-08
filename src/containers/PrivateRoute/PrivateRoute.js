import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { getLocalStorageItem } from '../../utils/localStorage'

export function PrivateRoute ({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  const isAuth = !!getLocalStorageItem('user')
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />
      }
    />
  )
}

export default PrivateRoute
