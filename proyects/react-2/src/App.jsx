import './App.css'
import { Square } from './components/square.jsx'
import { useState } from 'react'
import { Turn } from './components/turn.jsx'
import { WinnerWindow } from './components/win.jsx'
import { turns } from './utils.js'
import { winner } from './logic/checkWiner.js'
import { checkDraw } from './logic/checkDraw.js'
import { useEffect } from 'react'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : turns.X
  })
  const [win, setWin] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || win) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const NewWinner = winner(newBoard)
    if (NewWinner) {
      setWin(NewWinner)
    } else if (checkDraw(newBoard)) {
      setWin(false)
    }
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWin(null)
  }

  return (
    <main>
      <section className="grid grid-cols-3">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>

      <section className="flex justify-center items-center ">
        <Turn isSelected={turn == turns.X}>{turns.X}</Turn>
        <Turn isSelected={turn == turns.O}>{turns.O}</Turn>
      </section>

      <WinnerWindow winner={win} restartGame={restartGame} />
    </main>
  )
}

export default App
