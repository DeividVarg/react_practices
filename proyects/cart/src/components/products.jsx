import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/cart'

export function ProductsComponent({ products }) {
  const { addToCart, cart, RemoveFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className="mt-2">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products?.map((product) => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li
              key={product.id}
              className="flex flex-col justify-center items-center bg-zinc-800 p-4 rounded-lg"
            >
              <img src={product.image} alt="image" className="h-70 w-90" />
              <strong>
                {product.title} - $ {product.price}
              </strong>

              <button
                className={`flex space-x-4 hover:scale-110 mt-1 transition  15 p-1.5 rounded-md bg-zinc-600 ${
                  isProductInCart ? 'hover:bg-red-500' : 'hover:bg-cyan-500'
                }`}
                onClick={() => {
                  isProductInCart
                    ? RemoveFromCart({ product })
                    : addToCart({ product })
                }}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
