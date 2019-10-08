import React from 'react';
import './App.css';
import UsersList from '../../Components/UsersList/UsersList';
import { Switch, Route } from 'react-router-dom';
import UserInfo from '../../Components/UserInfo/UserInfo';
import Settings from '../../Components/Settings/Settings';

class App extends React.Component {
  state = { users: [], isLoading: true, isError: false };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data,
        }),
      )
      .catch(err =>
        this.setState({
          isError: true,
        }),
      )
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  }

  render() {
    // const link =
    //   'https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123';
    // const search = new URL(link).search;
    // const params = new URLSearchParams(search);
    // console.log(params.get('q'));

    const { users } = this.state;
    // let link =
    //   'https://www.iaai.com/VehicleDetails?itemid=33772735&RowNumber=0&similarVehicleItemId=&isNext=&loadRecent=true';
    // let search = new URL(link).search;
    // let params = new URLSearchParams(search);
    // console.log(params.get('itemid'));
    // console.log(params.get('RowNumber'));
    // console.log(params.get('loadRecent'));

    // console.log(search);
    // console.log(params);
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <UsersList users={users} {...props} />}
          />
          <Route path="/settings" component={Settings} />
          <Route path="/:id" component={UserInfo} />
        </Switch>

        {/* <Switch>
          <Route path="/" render={props => <p>Hello</p>} exact />
          <Route
            render={props => <UsersList users={users} {...props} />}
            path="/users"
          />
          <Route path="/users/:userId" component={UserInfo} />
        </Switch> */}
        {/* // <UsersList users={users} /> */}
      </>
    );
  }
}

export default App;
