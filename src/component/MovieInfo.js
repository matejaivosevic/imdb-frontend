import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovie } from '../store/actions/MovieActions';
import '../styles/scss/movieInfo.scss'

const MovieInfo = () => {
    const { movie } = useSelector(state => ({
        movie: state.movie.movie
    }))
    let params = useParams()
    const id = params.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovie(id))
    }, [])

    const Movie = () => {
        return (
            <div className="movie-info col-md-12">
                <div className="movie-card-info row">
                    <div className="image-section col-md-3">
                        <img src={movie[0].image_url} alt="" />
                    </div>
                    <div className="info-section col-md-8">
                        <h4 className="title">{movie[0].title}</h4>
                        <span className="genre"><li>{movie[0].genre.name}</li></span>
                        <span className="description">
                            {movie[0].description.substring(0, 255)}...
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {movie ? <Movie/> : null}
        </>
    );
};

export default MovieInfo
