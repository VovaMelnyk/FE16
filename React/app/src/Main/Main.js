import React from 'react';
import './Main.css';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import Modal from '../Modal/Modal';

const Main = () => {
  const cartItems = [
    {
      name: 'Common Projects',
      model: 'Bball High',
      color: 'White',
      price: '$549',
      quantity: 1,
      // img: item1
    },
    {
      name: 'Maison Margiela',
      model: 'Future Sneakers',
      color: 'White',
      price: '$870',
      quantity: 3,
      // img: item2
    },
    {
      name: 'Our Legacy',
      model: 'Brushed Scarf',
      color: 'Brown',
      price: '$349',
      quantity: 4,
      // img: item3
    },
  ];
  return (
    <main className="main">
      <Header />
      {false && <Counter />}
      {false && <Modal />}
      {false && <Cart cartItems={cartItems} />}
    </main>
  );
};

export default Main;
