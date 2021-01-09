import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/v1/movies'
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };
}

export const movieService = new MovieService();
