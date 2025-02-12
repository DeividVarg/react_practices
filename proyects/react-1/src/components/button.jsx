export function Button({ isfollowing, children, ...props }) {
  return (
    <button
      className={`group flex mx-2 px-4 h-8 bg-slate-200 transition delay-20 ease-in  hover:scale-105 items-center justify-center rounded-2xl mt-1 ${
        !isfollowing
          ? 'hover:bg-blue-400 hover:text-white'
          : 'bg-transparent border-2 border-red-800 hover:bg-red-500/35 text-white'
      }`}
      {...props}
    >
      <span className={`${isfollowing && 'group-hover:hidden'}`}>
        {children}
      </span>

      <span
        className={`hidden   ${
          isfollowing && 'group-hover:block group-hover:text-red-500'
        }`}
      >
        Dejar de seguir
      </span>
    </button>
  )
}
