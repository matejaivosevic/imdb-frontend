// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import { getMovies, getMoviesByGenre, getMoviesByTitle } from '../store/actions/MovieActions';
import { getLocalStorageItem } from '../utils/localStorage';
import MovieCard from './MovieCard';
import Paginator from './Paginator';
import '../styles/scss/movieList.scss'
import debounce from 'lodash.debounce';
import { DropdownButton, Dropdown } from 'react-bootstrap'

const MovieList = () => {
    const [filterValue, setFilterValue] = useState('None')
    const [value, setValue] = useState('')
    const user = !!getLocalStorageItem('user')
    const { all } = useSelector(state => ({
        all: state.movie.all
    }))
    const dispatch = useDispatch()
    const history = useHistory()

    const changePage = page => {
        if (value !== '') {
            dispatch(getMoviesByTitle(page, value))
        } else if (filterValue !== 'None') {
            const genreIndex = all.genres.findIndex(n => n.name === filterValue)
            const genreId = all.genres[genreIndex].id
            dispatch(getMoviesByGenre(page, genreId))
        } else {
            dispatch(getMovies(page))
        }
    }

    const searchMovies = nextValue => {
        if (nextValue === '') {
            dispatch(getMovies(1))
        } else {
            dispatch(getMoviesByTitle(1, nextValue))
        }
    }

    const handleChange = event => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        const debouncedSave = debounce(() => {
            setFilterValue('None')
            searchMovies(nextValue)
        }, 750);
        debouncedSave();
    }

    const handleFilter = (id, name) => {
        setValue('')
        setFilterValue(name)
        dispatch(getMoviesByGenre(1, id))
    }

    const handleClear = () => {
        setFilterValue('None')
        dispatch(getMovies(1))
    }

    useEffect(() => {
        if (!user) { history.push(ROUTES.LOGIN) } else { dispatch(getMovies(1)) }
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="search-container col-md-4">
                        <input value={value} onChange={handleChange} placeholder="Search..." type="text" />
                    </div>
                    <div className="filter-container col-md-3">
                        <DropdownButton
                            menuAlign="right"
                            title={filterValue}
                            id="dropdown-menu-align-right"
                        >
                            {all.genres && all.genres.map(genre => (
                                <Dropdown.Item key={genre.id} onClick={() => handleFilter(genre.id, genre.name)}>{genre.name}</Dropdown.Item>
                            ))}
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => handleClear()} style={{ color: 'red' }} eventKey="4">Clear</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="col">
                    {all.data && all.data.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
            <Paginator length={all.length || 0} changePage={changePage} />
        </div>
    )
}

export default MovieList