const Button = (props) => {
  return (
    <button
      className={`cursor-pointer rounded-3xl ml-4 py-2 px-8 bg-transparent border-2 border-solid border-charleston-green hover:bg-charleston-green hover:text-alice-blue active:bg-charleston-green ${props.className}`}
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  )
}
 
export default Button