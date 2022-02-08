import React, { useState } from 'react';

import Body from './components/Layout/Body';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCart = () => {
    setCartIsShown(true)
  }

  const hideCart = () => {
    setCartIsShown(false)
  }

  return (
    <div className="App">
      <Header onCartClick={showCart} />
      {cartIsShown && <Cart onClose={hideCart} />}
      <Body>
        <Meals />
      </Body>
    </div>
  );
}

export default App;
