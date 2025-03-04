function HasMovies({ movies }) {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex flex-col justify-center items-center px-2"
          >
            <h3>{movie.tittle}</h3>
            <p className="text-zinc-200">{movie.year}</p>
            <p>{movie.type}</p>
            <img src={movie.poster} alt="poster" />
          </li>
        ))}
      </ul>
    </>
  )
}

function NotMovies() {
  return <strong>Not movies</strong>
}

export function MoviesResults({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <HasMovies movies={movies} /> : <NotMovies />
}
