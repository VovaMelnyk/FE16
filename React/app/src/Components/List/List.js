import React, { PureComponent } from 'react';
import './List.css';

class List extends PureComponent {
  state = {
    isError: false,
    isLoading: true,
    users: [],
  };

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState({
          users,
        }),
      )
      .catch(err =>
        this.setState({
          isError: true,
        }),
      )
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };
  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          users.map(el => (
            <div key={el.id}>
              <p>{el.name}</p>
              <p>{el.phone}</p>
              <p>{el.email}</p>
              <p>{el.username}</p>
              <p>{el.website}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default List;
