import { CartIcon, ClearCartIcon } from './Icons'
import { useId } from 'react'
import { useCart } from '../hooks/cart'

export function CartItem({ image, title, price, quantity, addToCart }) {
  console.log(quantity)
  return (
    <li className="flex flex-col justify-center items-center space-y-1.5">
      <div>
        <img src={image} alt={title} />
        <strong>
          {title} - {price}
        </strong>
        <p>
          cantidad : {quantity}
          <button
            className="transition-all duration-50 hover:bg-slate-400/50 p-0.5 rounded-sm"
            onClick={addToCart}
          >
            +
          </button>
        </p>
      </div>
    </li>
  )
}

export function Cart() {
  const cartId = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label
        htmlFor={cartId}
        className="absolute top-3 right-3 transition-all duration-500 hover:bg-slate-400 p-2 rounded-full group cursor-pointer bg-black/50  z-10"
      >
        <CartIcon />
      </label>
      <input
        type="checkbox"
        id={cartId}
        className="hidden absolute top-6 right-6 scale-200 cursor-pointer peer"
      />
      <aside className="hidden peer-checked:block absolute top-0 right-0 p-4 rounded-lg z-0 mt-10 bg-black/50 ">
        <ul className="w-40 space-y-4 border-b-2 border-white/20 pb-2 ">
          {cart.map(({ product, quantity }) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart({ product })}
              quantity={quantity}
              {...product}
            />
          ))}
        </ul>
        <button
          className="hover:scale-110 mt-2 transition  hover:bg-white/15 p-1.5 rounded-md bg-zinc-600 ml-15 "
          onClick={clearCart}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
