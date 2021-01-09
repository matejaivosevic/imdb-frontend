// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import { getMovies } from '../store/actions/MovieActions';
import { getLocalStorageItem } from '../utils/localStorage';

const MovieList = () => {
    const user = !!getLocalStorageItem('user')
    const { all } = useSelector(state => ({
        all: state.movie.all
    }))
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (!user) { history.push(ROUTES.LOGIN) } else { dispatch(getMovies()) }
    }, [])

    console.log(all)

    return null;
}

export default MovieList