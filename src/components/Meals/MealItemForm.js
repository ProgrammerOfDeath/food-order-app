import React, { useRef, useState } from "react"
import Input from "../UI/Input"


const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true)
  const mealInput = useRef()

  const checkForm = () => {
    const isValid = (
      mealInput.current.value.trim().length &&
      +mealInput.current.value > 1 &&
      +mealInput.current.value < 5
    )
    setFormIsValid(isValid)
  }
  
  const addMeal = (event) => {
    event.preventDefault()
    checkForm()

    if (!formIsValid) return

    props.onAddMeal(+mealInput.current.value)
    mealInput.current.value = 0
  }

  return (
    <form className="flex items-center justify-end" onSubmit={addMeal}>
      <Input
        ref={mealInput}
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