export const getMovies = async ({ search }) => {
  if (search == '') return null

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=e3ccc8ec&s=${search}`
    )

    console.log(response)

    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      tittle: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster,
    }))
  } catch (error) {
    console.log(error)
  }
}
