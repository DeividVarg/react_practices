export function Square({ children, update, index, updateBoard }) {
  const handelClick = () => {
    updateBoard(index)
  }

  return (
    <div>
      <div
        onClick={handelClick}
        className="flex m-1.5 justify-center items-center w-30 h-30 "
      >
        <span className="text-5xl">{children}</span>
        <div className="absolute border-3 boder-white w-30 h-30 hover:blur-[2px] transition-all duration-150 ease-in hover:scale-105 active:scale-95 active:border-amber-600 rounded-lg"></div>
      </div>
    </div>
  )
}
