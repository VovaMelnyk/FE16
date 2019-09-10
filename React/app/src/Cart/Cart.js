import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cartItems }) => (
  <div className="shopping-cart">
    <div className="title">Shopping Bag</div>
    {cartItems.map(el => (
      <div className="item" key={el.name}>
        <div className="buttons">
          <span className="delete-btn" />
          <span className="like-btn" />
        </div>
        <div className="image">{/* <img src="item-1.png" alt="" /> */}</div>
        <div className="description">
          <span>{el.name}</span>
          <span>{el.model}</span>
          <span>{el.color}</span>
        </div>
        <div className="quantity">
          <button className="plus-btn" type="button" name="button">
            {/* <img src="plus.svg" alt="" /> */}
          </button>
          <input type="text" name="name" value={el.quantity} />
          <button className="minus-btn" type="button" name="button">
            {/* <img src="minus.svg" alt="" /> */}
          </button>
        </div>
        <div className="total-price">{el.price}</div>
      </div>
    ))}
    <p className="total">
      {cartItems.reduce((acc, el) => acc + Number(el.price.slice(1)), 0)}$
    </p>
  </div>
);

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Cart;
