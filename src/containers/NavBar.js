import React, { useState } from 'react'
import '../assets/styles/headerBar.scss'
import { Link, useHistory } from 'react-router-dom'
import { ROUTES } from '../routes'
import { useSelector, connect } from 'react-redux'
import { logoutUserAction } from '../store/actions/AuthActions'

const HeaderBar = ({ dispatch }) => {
  const { isAuthenticated } = useSelector(state => ({
    isAuthenticated: state.todoReducer.token || state.login.isAuthenticated
  }))
  const [isAuth, setIsAuth] = useState(!!isAuthenticated)
  const history = useHistory()

  const authenticatedUserButtonsVisibility = {
    visibility: isAuth ? 'hidden' : 'visible'
  }

  const nonAuthenticatedButtonsVisibility = {
    visibility: isAuth ? 'visible' : 'hidden'
  }

  const handleClick = () => {
    dispatch(logoutUserAction())
    setIsAuth(false)
    history.push(ROUTES.LOGIN)
  }

  return (
    <div className="header">
        <div className="col-md-12 col-lg-12 col-sm-12 row">
            <div className="col-md-8 col-lg-8"></div>
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
