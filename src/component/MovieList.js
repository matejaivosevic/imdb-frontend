// eslint-disable-next-line no-unused-vars
import { move } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import { getMovies, getMoviesByTitle } from '../store/actions/MovieActions';
import { getLocalStorageItem } from '../utils/localStorage';
import MovieCard from './MovieCard';
import Paginator from './Paginator';
import '../styles/scss/movieList.scss'
import debounce from 'lodash.debounce';

const MovieList = () => {
    const [value, setValue] = useState('')
    const user = !!getLocalStorageItem('user')
    const { all } = useSelector(state => ({
        all: state.movie.all
    }))
    const dispatch = useDispatch()
    const history = useHistory()

    const changePage = page => {
        dispatch(getMovies(page))
    }

    const handleChange = event => {
        const { value: nextValue } = event.target;
		setValue(nextValue);
		const debouncedSave = debounce(() => {
            if(nextValue === '') {
                dispatch(getMovies(1))
            } else {
                dispatch(getMoviesByTitle(1, nextValue))
            }
        }, 750);
		debouncedSave();
    }

    useEffect(() => {
        if (!user) { history.push(ROUTES.LOGIN) } else { dispatch(getMovies(1)) }
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="search-container col-md-4">
                    <input value={value} onChange={handleChange} placeholder="Search..." type="text"/>
                </div>
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