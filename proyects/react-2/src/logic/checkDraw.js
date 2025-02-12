export const checkDraw = (Board) => {
  return Board.every((Square) => Square !== null)
}
