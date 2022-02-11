import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const cartItems = (
    <ul className="list-none m-0 p-0 overflow-auto max-h-80">
      {cartCtx.items.map((item, key) => (
        <li className="flex w-full justify-between" key={key}>
          <span>{item.name}</span>
          <span>{item.amount} * {item.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  )
  return ( 
    <Modal onBackdrop={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}$</span>
      </div>
      <div className="text-right">
        <Button onClick={props.onClose}>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
  )
}
 
export default Cart;