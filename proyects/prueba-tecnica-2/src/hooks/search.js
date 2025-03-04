import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const ifFirstInput = useRef(true)
  useEffect(() => {
    if (ifFirstInput.current) {
      ifFirstInput.current = search == ''
      return
    }
    if (search == '') {
      setError('no se puede hacer busquedas vacias')
      return
    }

    if (search.length < 2) {
      setError('es muy corto')
      return
    }

    setError(null)
  }, [search])
  return { search, error, setSearch }
}
