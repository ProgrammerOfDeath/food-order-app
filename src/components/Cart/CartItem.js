const cartItem = props => {
  return (
    <li
      className="flex w-full justify-between items-center px-4 mb-3 pb-5 border-b border-solid border-charleston-green"
    >
      <div>
        <h2 className="text-2xl mb-3">{props.name}</h2>
        <div>
          <span className="font-bold">${props.price.toFixed(2)}</span>
          <span className="ml-5 p-1 border solid border-charleston-green rounded-md"> x {props.amount}</span>
        </div>
      </div>
      <div className="flex flex-row">
        <button
          className="w-12 font-bold text-lg bg-transparent border border-solid border-charleston-green ml-4 rounded-md text-center hover:bg-charleston-green transition-colors duration-100 ease-in-out hover:text-alice-blue"
          type="button"
        >
          -
        </button>
        <button
          className="w-12 font-bold text-lg bg-transparent border border-solid border-charleston-green ml-4 rounded-md text-center hover:bg-charleston-green transition-colors duration-100 ease-in-out hover:text-alice-blue"
          type="button"
        >
          +
        </button>
      </div>
    </li>
  )
}

export default cartItem