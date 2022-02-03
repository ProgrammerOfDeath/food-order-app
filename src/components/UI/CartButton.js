import CartIcon from "./Icons/CartIcon";

const CartButton = (props) => {
  return (
    <button className="flex bg-alice-blue text-charleston-green items-center h-12 w-fit px-5 justify-around rounded-xl shadow-md text-lg transition ease-in-out hover:scale-110 duration-300" onClick={props.onClick}>
      <span className="w-5 h-5 mr-2.5">
        <CartIcon />
      </span>
      <span className="mr-2.5">Cart</span>
      <span className="py-1 px-4 rounded-3xl font-bold text-sm bg-charleston-green text-alice-blue text-white">0</span>
    </button>
  )
}
 
export default CartButton;