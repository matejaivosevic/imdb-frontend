import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { getLocalStorageItem } from '../../utils/localStorage'

export function PublicRoute ({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  const isAuth = !!getLocalStorageItem('user')
  return (
    <Route
      {...rest}
      render={props =>
        isAuth
          ? (
          <Redirect to={ROUTES.HOME} />
            )
          : (
          <Component {...props} />
            )
      }
    />
  )
}

export default PublicRoute
