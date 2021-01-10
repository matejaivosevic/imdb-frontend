import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/v1/movies',
  MOVIE: '/api/v1/movie'
};

class MovieService extends ApiService {
  getMovies = (page) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES}?page=${page}`);
  };

  getMovie = (id) => {
    return this.apiClient.get(`${ENDPOINTS.MOVIE}?id=${id}`);
  };
}

export const movieService = new MovieService();
