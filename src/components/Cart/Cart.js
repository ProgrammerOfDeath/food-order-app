import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="list-none m-0 p-0 overflow-auto max-h-80">
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item, key) => (
        <li key={key}>{item.name}</li>
      ))}
    </ul>
  )
  return ( 
    <Modal onBackdrop={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>24.54</span>
      </div>
      <div className="text-right">
        <Button onClick={props.onClose}>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
  )
}
 
export default Cart;