import MealItemForm from "./MealItemForm"
import React, { useContext } from "react"
import CartContext from "../../store/cart-context"

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const addMealToCart = (amount) => {
    cartCtx.addItem({
      ...props,
      amount
    })
  }

  const formattedPrice = `$${props.price.toFixed(2)}`
  return ( 
    <li className="flex justify-between m-4 pb-4">
      <div>
        <h3 className="mr-2">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-2 bold text-xl">{formattedPrice}</div>
      </div>
      <MealItemForm id={props.id} onAddMeal={addMealToCart}/>
    </li>
  )
}
 
export default MealItem