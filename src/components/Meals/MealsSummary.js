import Card from "../UI/Cars"

const MealsSummary = (props) => {
  return (
    <section className="mb-10">
      <Card className="text-center max-w-5xl m-auto w-11/12 relative -mt-24 text-lg">
        <h2 className="text-4xl mb-3">Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </Card>
    </section>
  )
}
 
export default MealsSummary