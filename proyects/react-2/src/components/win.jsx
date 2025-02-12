import Confetti from 'react-confetti'

export function WinnerWindow({ winner, restartGame }) {
  if (winner != null)
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-3xl">
        <Confetti numberOfPieces={70} recycle={false} />
        <div className="flex flex-col justify-center items-center space-y-4 bg-black/15 text-white p-8 rounded-lg border-4 border-white/50">
          <h2 className="text-4xl">{!winner ? 'empate' : 'Ganador'}</h2>
          <header>
            <span className="text-3xl">{winner}</span>
          </header>

          <footer>
            <button
              className="w-60 text-3xl border-4 border-white transition duration-400 hover:scale-105 hover:border-orange-600 "
              onClick={() => {
                restartGame()
              }}
            >
              Empezar de nuevo
            </button>
          </footer>
        </div>
      </div>
    )
}
