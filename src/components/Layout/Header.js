import CartButton from "../UI/CartButton"
import mealImage from '../../assets/meal.svg'

const Header = (props) => {
  return (
    <>
      <header className="px-10 z-10 py-5 fixed top-0 inset-x-0 shadow-md bg-alice-blue dark:bg-charleston-green text-black dark:text-alice-blue">
        <nav className="flex w-full justify-between items-center">
          <div className="text-3xl">Food-Order v2</div>
          <CartButton onClick={props.onCartClick}></CartButton>
        </nav>
      </header>
      <div className="w-full h-[35rem] z-0 overflow-hidden dark:bg-charleston-green">
        <img className="w-full h-full object-cover" src={mealImage} alt="Some delicious food" />
      </div>
    </>
  )
}

export default Header