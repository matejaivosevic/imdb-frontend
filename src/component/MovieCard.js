import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import { addToWatchList, likeMovie, visitMovie } from '../store/actions/MovieActions';
import '../styles/scss/movieCard.scss'

const MovieCard = ({ movie }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLike = () => {
    dispatch(likeMovie({movie_id: movie.id, status: 1}))
  }

  const handleDislike = () => {
    dispatch(likeMovie({movie_id: movie.id, status: 0}))
  }

  const likedStyle = {
    color: movie.current_user_liked ? '#FFDF6C' : 'black'
  }

  const dislikedStyle = {
    color: movie.current_user_disliked ? '#FFDF6C' : 'black'
  }

  const handleMovieClick = () => {
    dispatch(visitMovie(movie.id))
    history.push(`${ROUTES.MOVIE}/${movie.id}`)
  }

  const watchListFlagStyle = {
    color: movie.is_in_watch_list ? 'red' : 'black',
    float: 'right'
  }

  const handleAddToWatchList = () => {
    dispatch(addToWatchList({movie_id: movie.id}))
}

  return (
    <div className="movie-card col-md-12">
      <div className="movie-container">
        <div onClick={() => handleMovieClick()} className="movie-card-info row">
          <div className="image-section col-md-3">
            <img src={movie.image_url} alt="" />
          </div>
          <div className="info-section col-md-8">
            <h4 className="title">{movie.title}</h4>
            <span className="genre"><li>{movie.genre.name}</li></span>
            <span className="description">
              {movie.description.substring(0, 255)}...
        </span>
          </div>
        </div>
        <div className="bottom-part col-md-12">
          <i style={likedStyle} onClick={() => handleLike()} className="fa fa-thumbs-up col-md-2">{movie.num_of_likes}</i>
          <i style={dislikedStyle} onClick={() => handleDislike()} className="fa fa-thumbs-down col-md-2">{movie.num_of_dislikes}</i>
          <i className="fa fa-eye col-md-2">{movie.visit_count}</i>
          <i onClick={() => handleAddToWatchList()} style={watchListFlagStyle} className={movie.is_in_watch_list ? "fa fa-minus" : "fa fa-plus"}></i>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
