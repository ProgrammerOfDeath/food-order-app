import Body from './components/Layout/Body';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body>
        <Meals />
      </Body>
    </div>
  );
}

export default App;
