import { createContext } from 'react'
import { useReducer } from 'react'
import { reducer, initialState } from '../reducers/cartReducer'

export const cartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const RemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  return (
    <cartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        RemoveFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
