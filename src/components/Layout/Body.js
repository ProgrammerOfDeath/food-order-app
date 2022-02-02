const Body = (props) => {
  return (
    <main className="bg-alice-blue dark:bg-charleston-green text-black dark:text-alice-blue">
      <div className="container mx-auto h-screen">{props.children}</div>
    </main>
  )
}
 
export default Body;