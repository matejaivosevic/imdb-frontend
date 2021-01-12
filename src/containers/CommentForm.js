import React from 'react'
import { Formik } from 'formik'
import '../styles/scss/commentForm.scss'
import { CommentSchema } from '../utils/validations'

const CommentForm = ({ addComment }) => {
    const handleSubmit = (comment) => {
        addComment(comment)
    }

    return (
        <div>
            <Formik
                initialValues={{ content: '' }}
                validationSchema={CommentSchema}
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
                        <div className="comment-form">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="center-form">
                                        <div className="inputs col-md-12">
                                            <label>Comment</label>
                                            <textarea
                                                type="text"
                                                name="content"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.content}
                                                placeholder="Comment..."
                                            ></textarea>
                                            {errors.content && touched.content && errors.content
                                                ? (
                                                    <span>{errors.content}</span>
                                                )
                                                : null}
                                            <button type="submit">
                                                Comment
                    </button>
                                        </div>
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

export default CommentForm
