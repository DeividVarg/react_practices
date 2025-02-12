import { randomFact } from '../services/facts'
import { useEffect, useState } from 'react'

export function useRefreshFact() {
  const [fact, setFact] = useState('default response')

  const refreshFact = () => {
    randomFact().then((newFact) => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
