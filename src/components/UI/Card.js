const Card = (props) => {
  return ( 
    <div className={`bg-charleston-green dark:bg-alice-blue text-alice-blue dark:text-charleston-green shadow-md rounded-xl p-5 ${props.className}`}>
      {props.children}
    </div>
  )
}
 
export default Card