import './app.css'
import { Img } from './components/img.jsx'
import { Button } from './components/button.jsx'
import { useState } from 'react'

export function TwitterCard({ children, name, url, initialIsFollowing }) {
  const [isfollowing, setisfollowing] = useState(initialIsFollowing)

  const text = isfollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () => {
    setisfollowing(!isfollowing)
  }
  return (
    <article className="">
      <header className="flex w-full">
        <Img src={url} alt="imagen" />
        <div className="flex flex-col justify-center flex-grow text-white">
          <strong>{children}</strong>
          <span>@{name}</span>
        </div>
        <aside className="flex justify-center items-center">
          <Button
            type="submit"
            value={name}
            isfollowing={isfollowing}
            onClick={handleClick}
          >
            {text}
          </Button>
        </aside>
      </header>
    </article>
  )
}
