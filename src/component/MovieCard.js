import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../routes';
import '../styles/scss/movieCard.scss'

const MovieCard = ({ movie }) => {
  const history = useHistory()
  return (
    <div onClick={() => history.push(`${ROUTES.MOVIE}/${movie.id}`)} className="movie-card col-md-7">
      <div className="movie-card-info row">
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
    </div>
  );
};

export default MovieCard;
