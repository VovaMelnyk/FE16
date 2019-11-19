import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { setUser, sendUser } from "../../redux/actions/userActions";
import { userExist } from "../../redux/actions/authAction";

const Registration = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputChange = ({ target }) => {
    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { setUser, userExist, history, sendUser } = props;
    const user = { email, password };
    sendUser(user).then(() => history.replace("/"));
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div>Registration</div>
        <div className="login-input">
          <input
            value={email}
            onChange={inputChange}
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            value={password}
            onChange={inputChange}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
          />
          <button type="submit">Registration</button>
          <NavLink to="/login" className="link">
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setUser,
  userExist,
  sendUser
};

export default connect(null, mapDispatchToProps)(Registration);
