// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import { getWatchList } from '../store/actions/MovieActions';
import { getLocalStorageItem } from '../utils/localStorage';
import MovieCard from './MovieCard';
import '../styles/scss/movieList.scss'

const WatchList = () => {
    const user = !!getLocalStorageItem('user')
    const { list } = useSelector(state => ({
        list: state.movie.list
    }))
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (!user) { history.push(ROUTES.LOGIN) } else { dispatch(getWatchList()) }
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                </div>
                <div className="col">
                    {list && list.map(movie => (
                        <MovieCard movie={movie.movie} key={movie.movie_id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WatchList