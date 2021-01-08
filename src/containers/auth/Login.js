import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import '../../styles/scss/login.scss'
import { LoginSchema } from '../../utils/validations'
import { logIn } from '../../store/actions/AuthActions'

const Login = ({ dispatch }) => {
  const handleSubmit = (user) => {
    dispatch(logIn(user))
  }

  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="center-form">
                  <div className="inputs col-md-6">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      placeholder="Username..."
                    />
                    {errors.username && touched.username && errors.username
                      ? (
                        <span>{errors.username}</span>
                        )
                      : null}
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password..."
                    />
                    {errors.password && touched.password && errors.password
                      ? (
                      <span>{errors.password}</span>
                        )
                      : null}
                    <button type="submit">
                      Login
                                      </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div >
  )
}

export default connect()(Login)
