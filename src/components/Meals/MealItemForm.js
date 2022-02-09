import React, { useContext } from "react"
import Input from "../UI/Input"
import CartContext from "../../store/cart-context"


const MealItemForm = (props) => {
  const ctx = useContext(CartContext)
  
  const addMeal = (event) => {
    event.preventDefault()
    console.log(event)
    ctx.addItem(event.target.value)
  }

  return (
    <form className="flex items-center justify-end" onSubmit={addMeal}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          step: '1',
        }}
      />
      <button
        className="cursor-pointer ml-3 py-3 px-8 bold rounded-3xl bg-charleston-green text-alice-blue transition ease-in-out duration-200 hover:brightness-150"
        type="submit"
      >
        Add
      </button>
    </form>
  )
}
 
export default MealItemForm