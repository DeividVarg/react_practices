import { useState } from 'react'
import './App.css'
import { MoviesResults } from './components/movieResults.jsx'
import { useMovie } from './hooks/movieHook.js'
import { useSearch } from './hooks/search.js'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovie, loading } = useMovie({ search, sort })

  const debounceMovies = debounce(
    debounce((search) => {
      getMovie({ search })
    }, 500),
    []
  )

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceMovies(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <form
          className="flex flex-col space-y-2 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <label>Put your movies</label>
          <input
            onChange={handleChange}
            type="text"
            value={search}
            placeholder="spiderman no way home ..."
          />

          <input
            type="checkbox"
            name="sort"
            id=""
            onChange={handleSort}
            checked={sort}
          />
          <button
            type="submit"
            className="hover:scale-105 border-2 border-white w-30 h-7 text-center rounded-md active:bg-red-600"
          >
            submit
          </button>
          <p>{error}</p>
        </form>
      </header>

      <main className="flex flex-col items-center justify-center">
        {loading ? <p>cargando...</p> : <MoviesResults movies={movies} />}
      </main>
    </>
  )
}

export default App
