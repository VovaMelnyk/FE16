import React from 'react';
import PropTypes from 'prop-types';
import './Html.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Html = props => (
  <div className="container">
    <h2 className="title">HTML</h2>
    <p className="text">
      Hypertext Markup Language (HTML) (укр. Мова розмітки гіпертекстових
      документів) —стандартна мова розмітки для створення веб-сторінок і
      веб-додатків . З Cascading Style Sheets (CSS) і JavaScript, вона утворює
      тріаду основних технологій для World Wide Web. Веб-браузери отримують
      HTML-документи з веб-сервера або з локальної пам'яті і передають документи
      в мультимедійні веб-сторінки. HTML описує структуру веб-сторінки
      семантично і спочатку включені сигнали для зовнішнього вигляду документа.
      <NavLink to="/javascript">JavaScript</NavLink>
    </p>
  </div>
);

Html.propTypes = {
  // bla: PropTypes.string,
};

Html.defaultProps = {
  // bla: 'test',
};

export default Html;
