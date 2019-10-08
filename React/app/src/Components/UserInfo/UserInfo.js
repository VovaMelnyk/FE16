import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.css';

class UserInfo extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const { match } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then(res => res.json())
      .then(user =>
        this.setState({
          user,
        }),
      );
  }

  back = () => {
    const { history } = this.props;
    history.goBack();
  };

  next = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    console.log(this.props);
    const { user } = this.state;
    return (
      <div className="user">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        <button onClick={this.back}>BACK</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default UserInfo;
