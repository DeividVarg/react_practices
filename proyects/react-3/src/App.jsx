import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [follow, setFollow] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (follow) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      // cleanup method
      window.removeEventListener('pointermove', handleMove)
    }
  }, [follow])

  return (
    <>
      <div
        className="absolute bg-red-600 rounded-full w-5 h-5 border-2"
        style={{
          transform: `translate(${position.x}px,${position.y}px)`,
          pointerEvents: 'none',
          left: -10,
          top: -10,
        }}
      />

      <button
        onClick={() => {
          setFollow(!follow)
        }}
      >
        {follow ? 'desactivar' : 'activar'}
      </button>
    </>
  )
}

export default App
