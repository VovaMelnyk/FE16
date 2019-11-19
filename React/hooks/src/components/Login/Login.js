import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { sendLoginUser } from "../../redux/actions/userActions";

//import { Test } from './Login.styles';

const Login = props => {
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const inputChange = ({ target }) => {
    const { value, name } = target;
    if (name === "email") {
      setLogin(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = e => {
    const { sendLoginUser, history } = props;
    e.preventDefault();
    const user = { email, password };
    sendLoginUser(user).then(() => history.replace("/"));
  };
  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div>Login</div>
        <div className="login-input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={inputChange}
          />
          <button type="submit">Login</button>
          <NavLink to="/registration" className="link">
            Sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  sendLoginUser
};
export default connect(null, mapDispatchToProps)(Login);
