import { useEffect, useState } from 'react'

export function useCatImg({ fact }) {
  const [catImg, setCatImg] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}`).then((response) => {
      const { url } = response
      setCatImg(url)
    })
  }, [fact])
  return { catImg }
}
