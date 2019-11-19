import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userLogOut } from "../../redux/actions/authAction";
import { isAuth } from "../../redux/selectors";
import "./Header.css";

const renderHeader = (isAuth, userLogOut) => {
  if (isAuth) {
    return (
      <>
        <li className="menu__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/login" onClick={userLogOut}>
            LOG OUT
          </NavLink>
        </li>
      </>
    );
  } else {
    return (
      <li className="menu__item">
        <NavLink to="/login">Login</NavLink>
      </li>
    );
  }
};

const Header = ({ isAuth, userLogOut }) => (
  <ul className="menu">{renderHeader(isAuth, userLogOut)}</ul>
);

const mapStateToProps = state => ({
  isAuth: isAuth(state)
});

const mapDispatchToProps = {
  userLogOut
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
