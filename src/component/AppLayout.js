import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import Home from '../containers/Home';
import { authUser } from '../store/actions/AuthActions';

import { ROUTES } from '../routes'
import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';
import PublicRoute from '../containers/PublicRoute/PublicRoute';
import MovieList from './MovieList';

class AppLayout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.props.history.push(ROUTES.HOME);
      } else {
        this.props.history.push(ROUTES.LOGIN);
      }
    }
  }

  render() {
    return (
      <>
      <PrivateRoute exact path={ROUTES.HOME} component={Home} />
      <PublicRoute exact path={ROUTES.REGISTER} component={Register} />
      <PrivateRoute exact path={ROUTES.MOVIE_LIST} component={MovieList} />
      <PublicRoute exact path={ROUTES.LOGIN} component={Login} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser
  };
};

const mapDispatchToProps = () => {
  return {
    authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppLayout)
);
