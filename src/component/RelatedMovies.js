// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../routes'
import { visitMovie } from '../store/actions/MovieActions'
import '../styles/scss/relatedMovies.scss'

const RelatedMovies = ({id}) => {
    const dispatch = useDispatch()
    const { movies } = useSelector(state => ({
        movies: state.movie.related
    }))
    
    const history = useHistory()
    return (
        <div className="related-movies-container">
            <h3>Related movies</h3>
            <div className="col-md-12 movies">
                {movies && movies.map(movie => (
                    movie.id !== id ? 
                    <h5 key={movie.id} onClick={() => {history.push(`${ROUTES.MOVIE}/${movie.id}`); dispatch(visitMovie(movie.id))}}>{movie.title}</h5>
                    :
                    null
                ))}
            </div>
        </div>
    )
}

export default RelatedMovies