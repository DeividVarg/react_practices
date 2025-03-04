import { Filter } from './filter'

export function Header() {
  return (
    <header>
      <h1 className="text-4xl flex justify-center items-center my-20 ">
        Products 📦
      </h1>

      <Filter />
    </header>
  )
}
