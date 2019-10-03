import React from 'react';
import PropTypes from 'prop-types';
import './Css.css';

const Css = props => (
  <div className="container">
    <h2 className="title">CSS</h2>
    <p className="text">
      CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) —
      спеціальна мова, що використовується для опису зовнішнього вигляду
      сторінок, написаних мовами розмітки даних. Найчастіше CSS використовують
      для візуальної презентації сторінок, написаних HTML та XHTML, але формат
      CSS може застосовуватися до інших видів XML-документів.
    </p>
  </div>
);

Css.propTypes = {
  // bla: PropTypes.string,
};

Css.defaultProps = {
  // bla: 'test',
};

export default Css;
