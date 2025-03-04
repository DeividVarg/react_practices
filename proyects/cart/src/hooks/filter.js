import { useContext } from 'react'
import { FilterContext } from '../context/Filter.jsx'

export function useFilter() {
  const { filter, setFilter } = useContext(FilterContext)

  const filterProducts = ({ products }) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category == 'all' || product.category == filter.category)
      )
    })
  }

  return { filter, filterProducts, setFilter }
}
