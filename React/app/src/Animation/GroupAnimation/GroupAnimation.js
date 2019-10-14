import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import './GroupAnimation.css';

class GroupAnimation extends Component {
  items = [
    {
      name: 'Павло Зібров - Хрещатик',
      id: uuid(),
    },
    {
      name: 'Степан Гіга - Яворина',
      id: uuid(),
    },
    {
      name: 'Іво Бобу л- А липи цвітуть',
      id: uuid(),
    },
    {
      name: 'Михайло Поплавський - Юний орел',
      id: uuid(),
    },
    {
      name: 'Олег Винник - Вовчиця',
      id: uuid(),
    },
    {
      name: 'Віктор Павлік - Шикидим',
      id: uuid(),
    },
  ];

  state = {
    favorites: [],
  };

  toggleInFavorites = id => {
    let favorites;
    const isItemInFavorites = this.state.favorites.find(
      favorite => favorite.id === id,
    );
    if (isItemInFavorites) {
      // Item is already in favorites, remove it.
      favorites = this.state.favorites.filter(favorite => favorite.id !== id);
    } else {
      // Item is not in favorites, add it.
      favorites = [
        ...this.state.favorites,
        this.items.find(item => id === item.id),
      ];
    }
    this.setState({ favorites });
  };

  render() {
    return (
      <div className="container">
        <ul className="musicList">
          {this.items.map(({ id, name }) => (
            <li
              key={id}
              className="music"
              onClick={() => this.toggleInFavorites(id)}
            >
              {name}
              <span className="star">
                {this.state.favorites.find(favorite => favorite.id === id)
                  ? '★'
                  : '☆'}
              </span>
            </li>
          ))}
        </ul>
        <div className="favorites">
          <p>My Favorite Songs:</p>
          <TransitionGroup component="ul">
            {this.state.favorites.map(({ id, name }) => (
              <CSSTransition timeout={500} classNames="fade" key={id}>
                <li className="favorite">{name}</li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default GroupAnimation;
