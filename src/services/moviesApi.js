const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c89f22547ec952f04456d39efb9827a2";

async function fetchWithErrorHandling(url) {
  const response = await fetch(url);
  return response.ok ? response.json() : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchMovieByName(query, page) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}
