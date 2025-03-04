import { useState } from 'react'
import { useId } from 'react'
import { useFilter } from '../hooks/filter'

export function Filter() {
  const filterPriceId = useId()
  const categoryFilterId = useId()
  const { filter, setFilter } = useFilter()

  const handleChangePrice = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }
  return (
    <section className="flex space-x-5 ">
      <div className="space-x-2">
        <label htmlFor={filterPriceId}>precio</label>
        <input
          type="range"
          name="price"
          id={filterPriceId}
          min="0"
          max="2000"
          value={filter.minPrice}
          onChange={handleChangePrice}
        />
        <span>{filter.minPrice}</span>
      </div>

      <div className="space-x-2">
        <label htmlFor={categoryFilterId}>categorias</label>
        <select
          name="category"
          id={categoryFilterId}
          className="bg-black"
          onChange={handleChangeCategory}
        >
          <option value="all">all</option>
          <option value="Smartphones">smartphones</option>
          <option value="Laptops">Laptops</option>
          <option value="Accesorios">Accesories</option>
          <option value="Audio">Audio</option>
        </select>
      </div>
    </section>
  )
}
