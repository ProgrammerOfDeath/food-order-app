import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const onAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className="list-none m-0 p-0 overflow-y-scroll max-h-80">
      {cartCtx.items.map((item, key) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          key={key}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
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