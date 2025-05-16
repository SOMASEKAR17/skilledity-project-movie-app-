
export async function fetchMovies(endpoint) {
  const url = `https://api.themoviedb.org/3/movie/${endpoint}`;
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return null;
  }
}

