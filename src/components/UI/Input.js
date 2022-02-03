const Input = (props) => {
  return ( 
    <div className="flex items-center mb-2">
      <label className="bold mr-4" htmlFor={props.input.id}>{props.label}</label>
      <input className=" w-12 rounded-md border-2 border-solid border-[#ccc] pl-2" {...props.input} />
    </div>
  )
}
 
export default Input