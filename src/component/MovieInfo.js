import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentForm from '../containers/CommentForm';
import { getMovie, likeMovieOnSinglePage, addComment, getAllComments } from '../store/actions/MovieActions';
import '../styles/scss/movieInfo.scss'
import Comment from './Comment';

const MovieInfo = () => {
    const [showBtn, setShowBtn] = useState(true)
    const { movie } = useSelector(state => ({
        movie: state.movie.movie
    }))
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovie(id))
    }, [])

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

    const Movie = () => {
        return (
            <div className="movie-container">
                <div className="movie-info col-md-8">
                    <div className="movie-card-info row">
                        <div className="image-section col-md-3">
                            <img src={movie.data[0].image_url} alt="" />
                        </div>
                        <div className="info-section col-md-8">
                            <h4 className="title">{movie.data[0].title}</h4>
                            <span className="genre"><li>{movie.data[0].genre.name}</li></span>
                            <span className="description">
                                {movie.data[0].description}...
                        </span>
                        </div>
                    </div>
                </div>
                <div className="bottom-part">
                    <i style={likedStyle} onClick={() => handleLike()} className="fa fa-thumbs-up">{movie.data[0].num_of_likes}</i>
                    <i style={dislikedStyle} onClick={() => handleDislike()} className="fa fa-thumbs-down">{movie.data[0].num_of_dislikes}</i>
                    <i className="fa fa-eye">{movie.data[0].visit_count}</i>
                </div>
                <div className="comments-section col-md-7">
                    <CommentForm addComment={handleAddComment} />
                    <div className="comments">
                        {movie && movie.comments.map((comment, i) => (
                            <Comment comment={comment} key={i}/>
                        ))}
                    </div>
                    <button onClick={() => handleShowAll()} style={showBtnStyle} className="show-all-button">Show all</button>
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
