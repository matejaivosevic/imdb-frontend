// eslint-disable-next-line no-unused-vars
import { move } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import { getMovies } from '../store/actions/MovieActions';
import { getLocalStorageItem } from '../utils/localStorage';
import MovieCard from './MovieCard';
import Paginator from './Paginator';

const MovieList = () => {
    const user = !!getLocalStorageItem('user')
    const { all } = useSelector(state => ({
        all: state.movie.all
    }))
    const dispatch = useDispatch()
    const history = useHistory()

    const changePage = page => {
        dispatch(getMovies(page))
    }

    useEffect(() => {
        if (!user) { history.push(ROUTES.LOGIN) } else { dispatch(getMovies(1)) }
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="col">
                    {all.data && all.data.map((movie, i) => (
                        <MovieCard movie={movie} key={i} />
                    ))}
                </div>
            </div>
            <Paginator length={all.length || 0} changePage={changePage}/>
        </div>
    )
}

export default MovieList