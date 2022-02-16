import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./Icons/CartIcon";

const CartButton = (props) => {
  const [animateButton, setButtonAnimation] = useState(false)
  const { items: cartItems } = useContext(CartContext)
  const numberCartItems = cartItems.reduce((prevValue, item) => prevValue + item.amount, 0)

  useEffect(() => {
    if (!cartItems.length) return

    setButtonAnimation(true)

    const timer = setTimeout(() => {
      setButtonAnimation(false)
    }, 200)

    // clear old timer before re-rendering
    return () => {
      clearTimeout(timer)
    }
  }, [cartItems])

  return (
    <button
      className={`flex bg-alice-blue text-charleston-green items-center h-12 w-fit px-5 justify-around rounded-xl shadow-md text-lg transition ease-in-out hover:scale-110 duration-300 ${animateButton ? 'animate-bump' : ''}`}
      onClick={props.onClick}
      type="button"
    >
      <span className="w-5 h-5 mr-2.5">
        <CartIcon />
      </span>
      <span className="mr-2.5">Cart</span>
      <span className="py-1 px-4 rounded-3xl font-bold text-sm bg-charleston-green text-alice-blue">
        {numberCartItems}
      </span>
    </button>
  )
}
 
export default CartButton;