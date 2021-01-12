// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../routes'
import '../styles/scss/popularMovies.scss'

const PopularMovies = () => {
    const history = useHistory()
    const { all } = useSelector(state => ({
        all: state.movie.all
    }))

    console.log(all)

    return (
        <div className="popular-movies-container">
            <h3>Popular movies</h3>
            <div className="col-md-12 movies">
                {all.popular && all.popular.map((movie, i) => (
                    <h5 onClick={() => history.push(`${ROUTES.MOVIE}/${movie.id}`)}>{i+1}. {movie.title}</h5>
                ))}
            </div>
        </div>
    )
}

export default PopularMovies