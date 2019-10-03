import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import ReactSection from '../ReactSection/ReactSection';
import VueSection from '../VueSection/VueSection';
import AngularSection from '../AngularSection/AngularSection';

import './Frameworks.css';

const Frameworks = ({ match }) => {
  return (
    <div className="container">
      <h2 className="title">Frameworks</h2>
      <p className="text">
        A software framework is an abstraction in which software providing
        generic functionality can be selectively changed by additional
        user-written code. JavaScript framework is an application framework
        written in JavaScript where the programmers can manipulate the functions
        and use them for their convenience. Frameworks are more adaptable for
        the designing of websites and hence, they are preferred by most of the
        website developers. JavaScript frameworks are a type of tool that makes
        working with JavaScript easier and smoother. These frameworks also make
        it possible for the programmer to code the application as a device
        responsive. This responsiveness is yet another reason why the JavaScript
        frameworks are quite popular when it comes to the question of using a
        high-level machine language. Let’s have a look at the best JS Frameworks
        in 2019.
      </p>
      <ul className="nested-menu">
        <li className="nested-menu__item">
          <NavLink to={`${match.path}/react`}>React</NavLink>
        </li>
        <li className="nested-menu__item">
          <NavLink to={`${match.path}/vue`}>Vue</NavLink>
        </li>
        <li className="nested-menu__item">
          <NavLink to={`${match.path}/angular`}>Angular</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/react`} component={ReactSection} />
        <Route path={`${match.path}/vue`} component={VueSection} />
        <Route path={`${match.path}/angular`} component={AngularSection} />
      </Switch>
    </div>
  );
};

Frameworks.propTypes = {
  // bla: PropTypes.string,
};

Frameworks.defaultProps = {
  // bla: 'test',
};

export default Frameworks;
