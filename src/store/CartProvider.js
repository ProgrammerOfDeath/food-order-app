import CartContext from "./cart-context"
import { useReducer } from "react"

// action types handled in cart reducer
const ACTION_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

const defaultState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === ACTION_TYPES.ADD) {
    let updatedItems = []
    let updatedAmount = 0

    let existingItem = state.items.find((item) => item.id === action.value.id)

    if (existingItem) {
      existingItem.amount += action.value.amount
      updatedItems = [...state.items]
      updatedItems[updatedItems.indexOf(existingItem)] = existingItem
    } else {
      updatedItems = [...state.items, action.value]
    }
    updatedAmount = state.totalAmount + (action.value.price * action.value.amount)
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  if (action.type === ACTION_TYPES.REMOVE) {
    let updatedItems = state.items.filter(item => item.id !== action.value.id)
    let updatedAmount = state.totalAmount - (action.value.price * action.value.amount)

    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  
  return defaultState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
  
  const addItemHandler = (item) => {
    dispatchCartAction({ type: ACTION_TYPES.ADD, value: item })
  }

  const removeItemHandler = (item) => {
    dispatchCartAction({ type: ACTION_TYPES.REMOVE, value: item })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider