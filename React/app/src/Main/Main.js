import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import AddForm from '../AddForm/AddForm';

class Main extends React.Component {
  state = {
    color: '',
    caption: '',
    price: '',
    cardList: [],
  };

  componentWillUnmount() {
    console.log('Willunmount');
  }

  inputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = e => {
    const { color, price, caption } = this.state;
    const { toggleForm } = this.props;
    e.preventDefault();
    const item = {
      color,
      price,
      caption,
    };
    this.setState(prev => ({
      cardList: [...prev.cardList, item],
      color: '',
      price: '',
      caption: '',
    }));
    toggleForm();
  };

  render() {
    const { isFormModalShow, toggleForm } = this.props;
    const { color, caption, price, cardList } = this.state;
    return (
      <main className="main">
        <Header toggleForm={toggleForm} />
        {/* {isOpen && <Modal toggleModal={toggleModal} />} */}
        {isFormModalShow && (
          <AddForm
            toggleForm={toggleForm}
            color={color}
            price={price}
            caption={caption}
            inputChange={this.inputChange}
            formSubmit={this.formSubmit}
          />
        )}

        {cardList.map(el => (
          <div key={el.caption}>
            <h2>{el.caption}</h2>
            <p>{el.color}</p>
            <p>{el.price}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Main;

// cartItems = [
//   {
//     name: 'Common Projects',
//     model: 'Bball High',
//     color: 'White',
//     price: '$549',
//     quantity: 1,
//     // img: item1
//   },
//   {
//     name: 'Maison Margiela',
//     model: 'Future Sneakers',
//     color: 'White',
//     price: '$870',
//     quantity: 3,
//     // img: item2
//   },
//   {
//     name: 'Our Legacy',
//     model: 'Brushed Scarf',
//     color: 'Brown',
//     price: '$349',
//     quantity: 4,
//     // img: item3
//   },
// ];
