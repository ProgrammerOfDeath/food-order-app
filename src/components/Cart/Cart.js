import Button from "../UI/Button";

const Cart = (props) => {
  const cartItems = (
    <ul className=" list-none m-0 p-0 overflow-auto max-h-80">
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )
  return ( 
    <div>
      {cartItems}
      <div className="flex justify-between items-center bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>24.54</span>
      </div>
      <div className="text-right">
        <Button>Close</Button>
        <Button>Order</Button>
      </div>
    </div>
  )
}
 
export default Cart;