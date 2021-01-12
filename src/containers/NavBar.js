import React from 'react'
import '../styles/scss/navBar.scss'
import { Link, useHistory } from 'react-router-dom'
import { ROUTES } from '../routes'
import { connect } from 'react-redux'
import { logout } from '../store/actions/AuthActions'
import authService from '../services/AuthService'

const HeaderBar = ({ dispatch }) => {
  const isAuthenticated = authService.isAuthenticated()

  const history = useHistory()

  const authenticatedUserButtonsVisibility = {
    visibility: isAuthenticated ? 'hidden' : 'visible'
  }

  const nonAuthenticatedButtonsVisibility = {
    visibility: isAuthenticated ? 'visible' : 'hidden'
  }

  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className="header">
        <div className="col-md-12 col-lg-12 col-sm-12 row">
            <div className="col-md-8 col-lg-8 centered">
                <div style={nonAuthenticatedButtonsVisibility} className="row">
                    <span onClick={() => history.push(ROUTES.MOVIE_LIST)}>IMDB</span>
                    <span onClick={() => history.push(ROUTES.WATCH_LIST)}>Watch list</span>
                    <span onClick={() => history.push(ROUTES.CREATE_MOVIE)}>Create Movie</span>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
                <div className="button-container">
                    <Link to={ROUTES.REGISTER} style={authenticatedUserButtonsVisibility}>
                        <button>Register</button>
                    </Link>
                    <Link to={ROUTES.LOGIN} style={authenticatedUserButtonsVisibility}>
                        <button className="login-button">Login</button>
                    </Link>
                    <button style={nonAuthenticatedButtonsVisibility} onClick={() => handleClick()} className="logout-button">Logout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default connect()(HeaderBar)
