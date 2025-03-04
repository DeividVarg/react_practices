import { getMovies } from '../services/movies'
import { useState, useRef, useMemo, useCallback } from 'react'

export function useMovie({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovie = useCallback(async ({ search }) => {
    if (previusSearch.current == search) return
    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search
      const newMovie = await getMovies({ search })
      setMovies(newMovie)

      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }, [])

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
      : movies
  }, [sort, movies])

  return { movies: sortMovies, getMovie, loading, error }
}
