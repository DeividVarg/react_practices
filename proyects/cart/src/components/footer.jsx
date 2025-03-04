import { IS_DELEVOPMENT } from '../config'
import { useFilter } from '../hooks/filter'
export function Footer() {
  const { filter } = useFilter()
  return (
    <footer className="flex flex-col rounded-3xl  bg-black/50 p-2 fixed bottom-0.5 left-0.5 ">
      <div>
        <p>shopping Cart whit react ⚛️ </p>
        {IS_DELEVOPMENT && JSON.stringify(filter, null, 2)}
      </div>
    </footer>
  )
}
