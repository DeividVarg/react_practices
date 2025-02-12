import './App.css'
import { useCatImg } from './hooks/catImg'
import { useRefreshFact } from './hooks/fact'

function App() {
  const { fact, refreshFact } = useRefreshFact()
  const { catImg } = useCatImg({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <h1>api de gatitos</h1>

      {fact && <p>{fact}</p>}

      <img src={catImg} alt="cat image the fact" />

      <button onClick={handleClick}> reset</button>
    </>
  )
}

export default App
