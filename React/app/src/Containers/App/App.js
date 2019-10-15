import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../../Components/Loading/Loading';
import Header from '../../Components/Header/Header';
// import Home from '../../Components/Home/Home';
// import Contact from '../../Components/Contact/Contact';
// import List from '../../Components/List/List';
import './App.css';
import SimpleAnimation from '../../Animation/SimpleAnimation/SimpleAnimation';
import GroupAnimation from '../../Animation/GroupAnimation/GroupAnimation';

// const LoadableHome = Loadable({
//   loader: () =>
//     import('../../Components/Home/Home' /* webpackChunkName: "Home" */),
//   loading: Loading,
//   delay: 200,
//   timeout: 10000,
// });

// const LoadableContact = Loadable({
//   loader: () =>
//     import(
//       '../../Components/Contact/Contact' /* webpackChunkName: "Contact" */
//     ),
//   loading: Loading,
//   delay: 200,
//   timeout: 10000,
// });

// const LoadableList = Loadable({
//   loader: () =>
//     import('../../Components/List/List' /* webpackChunkName: "List" */),
//   loading: Loading,
//   delay: 200,
//   timeout: 10000,
// });

const LoadableHome = lazy(() =>
  import('../../Components/Home/Home' /* webpackChunkName: "Home" */),
);

const LoadableContact = lazy(() =>
  import('../../Components/Contact/Contact' /* webpackChunkName: "Contact" */),
);

const LoadableList = lazy(() =>
  import('../../Components/List/List' /* webpackChunkName: "List" */),
);

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Switch>
            <Route exact path="/" component={LoadableHome} />
            <Route path="/contact" component={LoadableContact} />
            <Route path="/users" component={LoadableList} />
          </Switch>
        </Suspense>
        {/* <SimpleAnimation /> */}
        <GroupAnimation />
      </>
    );
  }
}

export default App;
