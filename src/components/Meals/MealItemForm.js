import Input from "../UI/Input"

const MealItemForm = (props) => {
  return (
    <form className="flex items-center justify-end">
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          step: '1',
        }}
      />
      <button className="cursor-pointer ml-3 py-3 px-8 bold rounded-3xl bg-charleston-green text-alice-blue transition ease-in-out duration-200 hover:brightness-150">
        Add
      </button>
    </form>
  )
}
 
export default MealItemForm