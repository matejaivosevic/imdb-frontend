import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/v1/movies',
  MOVIE: '/api/v1/movie',
  MOVIES_BY_TITLE: '/api/v1/movies-by-title'
};

class MovieService extends ApiService {
  getMovies = (page) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES}?page=${page}`);
  };

  getMoviesByTitle = (page, title) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES_BY_TITLE}?title=${title}&page=${page}`);
  };

  getMovie = (id) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIE}?id=${id}`);
  };
}

export const movieService = new MovieService();
