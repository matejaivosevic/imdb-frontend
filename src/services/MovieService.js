import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/v1/movies',
  MOVIE: '/api/v1/movie',
  MOVIES_BY_TITLE: '/api/v1/movies-by-title',
  MOVIES_BY_GENRE: '/api/v1/movies-by-genre',
  LIKE_MOVIE: '/api/v1/like',
  VISIT_MOVIE: '/api/v1/visit-movie'
};

class MovieService extends ApiService {
  getMovies = (page) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES}?page=${page}`);
  };

  getMoviesByTitle = (page, title) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES_BY_TITLE}?title=${title}&page=${page}`);
  };

  getMoviesByGenre  = (page, id) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES_BY_GENRE}?id=${id}&page=${page}`);
  };

  likeMovie = (data) => {
    return this.apiClient.put(`${ENDPOINTS.LIKE_MOVIE}`, data.payload);
  };

  getMovie = (id) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIE}?id=${id}`);
  };

  visitMovie = (id) => {
    return this.apiClient.patch(`${ENDPOINTS.VISIT_MOVIE}?id=${id}`);
  };
}

export const movieService = new MovieService();
