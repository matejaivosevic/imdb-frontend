import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentForm from '../containers/CommentForm';
import { likeMovieOnSinglePage, addComment, getAllComments, addToWatchListSinglePage, getRelated, visitMovie } from '../store/actions/MovieActions';
import '../styles/scss/movieInfo.scss'
import Comment from './Comment';
import RelatedMovies from './RelatedMovies';

const MovieInfo = () => {
    const [showBtn, setShowBtn] = useState(true)
    const { movie } = useSelector(state => ({
        movie: state.movie.movie
    }))
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(visitMovie(id))
    }, [])

    useEffect(() => {
        if(movie) {
            dispatch(getRelated(movie.data[0].genre.id))
        }
    }, [movie])

    const handleLike = () => {
        dispatch(likeMovieOnSinglePage({ movie_id: id, status: 1 }))
    }

    const handleDislike = () => {
        dispatch(likeMovieOnSinglePage({ movie_id: id, status: 0 }))
    }

    const handleAddComment = comment => {
        const data = {
            movie_id: id,
            content: comment.content
        }
        dispatch(addComment(data))
    }

    const likedStyle = {
        color: movie && movie.data[0].current_user_liked ? '#FFDF6C' : 'black'
    }

    const dislikedStyle = {
        color: movie && movie.data[0].current_user_disliked ? '#FFDF6C' : 'black'
    }

    const showBtnStyle = {
        visibility: showBtn ? 'visible' : 'hidden'
    }

    const handleShowAll = () => {
        dispatch(getAllComments(id))
        setShowBtn(false)
    }

    const handleAddToWatchList = () => {
        dispatch(addToWatchListSinglePage({ movie_id: movie.data[0].id }))
    }

    const watchListFlagStyle = {
        color: movie && movie.data[0].is_in_watch_list ? 'red' : 'black'
    }

    const Movie = () => {
        return (
            <div className="info">
                <div className="row">
                    <div className="movie-container col-md-8">
                        <div className="movie-info col-md-12">
                            <div className="movie-card-info row">
                                <div className="image-section col-md-3">
                                    <img src={movie.data[0].image_url} alt="" />
                                </div>
                                <div className="info-section col-md-8">
                                    <h4 className="title">{movie.data[0].title}</h4>
                                    <span className="genre"><li>{movie.data[0].genre.name}</li></span>
                                    <span className="description">
                                        {movie.data[0].description}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part col-md-12">
                            <i style={likedStyle} onClick={() => handleLike()} className="fa fa-thumbs-up col-md-1">{movie.data[0].num_of_likes}</i>
                            <i style={dislikedStyle} onClick={() => handleDislike()} className="fa fa-thumbs-down col-md-1">{movie.data[0].num_of_dislikes}</i>
                            <i className="fa fa-eye col-md-1">{movie.data[0].visit_count}</i>
                            <i onClick={() => handleAddToWatchList()} style={watchListFlagStyle} className={movie.data[0].is_in_watch_list ? "fa fa-minus" : "fa fa-plus"}></i>
                        </div>
                        <div className="comments-section col-md-7">
                            <CommentForm addComment={handleAddComment} />
                            <div className="comments">
                                {movie && movie.comments.map(comment => (
                                    <Comment comment={comment} key={comment.user.username + comment.timestamp} />
                                ))}
                            </div>
                            <button onClick={() => handleShowAll()} style={showBtnStyle} className="show-all-button">Show all</button>
                        </div>
                    </div>
                    <div className="related">
                        <RelatedMovies id={id}/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {movie && movie.data ? <Movie /> : null}
        </>
    );
};

export default MovieInfo
