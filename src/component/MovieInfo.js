import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovie, likeMovieOnSinglePage } from '../store/actions/MovieActions';
import '../styles/scss/movieInfo.scss'

const MovieInfo = () => {
    const { movie } = useSelector(state => ({
        movie: state.movie.movie
    }))
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovie(id))
    }, [])

    const handleLike = () => {
        dispatch(likeMovieOnSinglePage({movie_id: id, status: 1}))
    }

    const handleDislike = () => {
        dispatch(likeMovieOnSinglePage({movie_id: id, status: 0}))
    }

    const likedStyle = {
        color: movie && movie[0].current_user_liked ? '#FFDF6C' : 'black'
    }

    const dislikedStyle = {
        color: movie && movie[0].current_user_disliked ? '#FFDF6C' : 'black'
    }

    const Movie = () => {
        return (
            <div className="movie-container">
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
                <div className="bottom-part">
                    <i style={likedStyle} onClick={() => handleLike()} className="fa fa-thumbs-up">{movie[0].num_of_likes}</i>
                    <i style={dislikedStyle} onClick={() => handleDislike()} className="fa fa-thumbs-down">{movie[0].num_of_dislikes}</i>
                    <i className="fa fa-eye">{movie[0].visit_count}</i>
                </div>
            </div>
        )
    }

    return (
        <>
            {movie ? <Movie /> : null}
        </>
    );
};

export default MovieInfo
