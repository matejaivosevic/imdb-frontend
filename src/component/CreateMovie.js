import React, { useEffect, useState } from 'react'
import '../styles/scss/createMovie.scss'
import { Formik } from 'formik'
import { MovieSchema } from '../utils/validations'
import { useDispatch, useSelector } from 'react-redux'
import { createMovie, getGenres } from '../store/actions/MovieActions'
import { DropdownButton, Dropdown } from 'react-bootstrap'


const CreateMovie = () => {
    const [genreId, setGenreId] = useState()
    const [filterValue, setFilterValue] = useState('Genres')
    const dispatch = useDispatch()
    
    const handleSubmit = values => {
        dispatch(createMovie(values))
    }
    
    const { genres } = useSelector(state => ({
        genres: state.movie.genres
    }))
    
    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const handleFilter = (name, id) => {
        setGenreId(id)
        setFilterValue(name)
    }

    return (
        <div>
            <Formik
                initialValues={{ title: '', description: '', imageUrl: '', genreId: genreId }}
                validationSchema={MovieSchema}
                onSubmit={(values) => {
                    handleSubmit({ ...values, genreId: genreId || genres[0].id})
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
                                <div className="form">
                                    <div className="inputs col-md-6">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                            placeholder="Title..."
                                        />
                                        {errors.title && touched.title && errors.title
                                            ? (
                                                <span>{errors.title}</span>
                                            )
                                            : null}
                                        <label>Description</label>
                                        <textarea
                                            type="text"
                                            name="description"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                            placeholder="Description..."
                                        ></textarea>
                                        {errors.description && touched.description && errors.description
                                            ? (
                                                <span>{errors.description}</span>
                                            )
                                            : null}
                                        <label>Image URL</label>
                                        <input
                                            type="text"
                                            name="imageUrl"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.imageUrl}
                                            placeholder="Image URL..."
                                        />
                                        {errors.imageUrl && touched.imageUrl && errors.imageUrl
                                            ? (
                                                <span>{errors.imageUrl}</span>
                                            )
                                            : null}
                                        <label>Genre</label>
                                        <DropdownButton
                                            menuAlign="right"
                                            title={filterValue}
                                            id="dropdown-menu-align-right"
                                        >
                                            {genres && genres.map(genre => (
                                                <Dropdown.Item value={values.genreId} key={genre.id} onClick={() => handleFilter(genre.name, genre.id)}>{genre.name}</Dropdown.Item>
                                            ))}
                                        </DropdownButton>
                                        <button className="create-button" type="submit">
                                            Create movie
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

export default CreateMovie
