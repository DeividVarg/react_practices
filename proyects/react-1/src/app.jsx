import './main.css'
import { TwitterCard } from './twittercard.jsx'

const user = [
  {
    name: 'Deivid Vargas',
    url: '../public/descarga.gif',
    isFollowing: false,
    children: 'Deivid jose vargas pantaleon',
  },
  {
    name: 'zorra',
    url: '../public/images.png',
    isFollowing: true,
    children: 'alejandra',
  },
]
export function App() {
  return user.map(({ name, url, isFollowing, children }) => (
    <TwitterCard name={name} url={url} isFollowing={isFollowing} key={name}>
      {children}
    </TwitterCard>
  ))
}
