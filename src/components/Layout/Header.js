import CartButton from "../UI/CartButton"

const Header = () => {
  return (
    <header className="px-10 py-5 fixed top-0 inset-x-0 shadow-md bg-alice-blue dark:bg-charleston-green text-black dark:text-alice-blue">
      <nav className="flex w-full justify-between items-center">
        <div className="text-3xl">Food-Order</div>
        <CartButton></CartButton>
      </nav>
    </header>
  )
}

export default Header