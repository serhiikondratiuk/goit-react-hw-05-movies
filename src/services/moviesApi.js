// https://api.themoviedb.org/3/movie/550?api_key=c89f22547ec952f04456d3

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c89f22547ec952f04456d39efb9827a2";

// fetch(`${BASE_URL}movie/550?api_key=${API_KEY}`).then((response) =>
//   console.log(response)
// );

async function fetchWithErrorHandling(url) {
  const response = await fetch(url);
  return response.ok ? response.json() : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
}
