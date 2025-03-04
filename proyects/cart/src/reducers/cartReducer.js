export const initialState = []
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const findProduct = state.findIndex((item) => item.id === id)

      if (findProduct >= 0) {
        const newCart = structuredClone(state)
        newCart[findProduct].quantity += 1
        return newCart
      }
      return [...state, { ...actionPayload, quantity: 1 }]
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      return state.filter((item) => item.id !== id)
    }

    case 'CLEAR_CART': {
      return initialState
    }
  }
  return state
}
