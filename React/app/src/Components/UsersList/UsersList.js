import React from 'react';
import { NavLink } from 'react-router-dom';
import './UsersList.css';

class UsersList extends React.Component {
  // componentDidMount() {
  //   console.log('sfsdfsdffsdfd');
  // }
  render() {
    const { users } = this.props;
    return (
      <ul className="collection">
        {users.map(el => (
          <li key={el.id} className="collection__item">
            <p>
              <NavLink to={`/${el.id}`}>{el.name}</NavLink>
              {/* {el.name} */}
            </p>
            <p>{el.username}</p>
            <p>{el.email}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default UsersList;
