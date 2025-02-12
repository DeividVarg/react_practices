export function Turn({ children, update, index, isSelected }) {
  return (
    <div
      className={`text-2xl text-white m-2 mt-8 items-center ${
        isSelected ? 'bg-orange-600 py-2 px-6 rounded-xl' : ''
      }`}
    >
      {children}
    </div>
  )
}
