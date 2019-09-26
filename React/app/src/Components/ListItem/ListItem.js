import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ListItem.styles';

class ListItem extends React.Component {
  handlerDelete = () => {
    const { id, deleteItem } = this.props;
    deleteItem(id);
  };

  handlerComplete = () => {
    const { completeItem, id } = this.props;
    completeItem(id);
  };

  render() {
    const { text, complete } = this.props;
    return (
      <li className={complete ? 'done' : 'text'}>
        {text}
        <button onClick={this.handlerDelete}>Delete</button>
        <button onClick={this.handlerComplete}>Complete</button>
      </li>
    );
  }
}

ListItem.propTypes = {
  // bla: PropTypes.string,
};

ListItem.defaultProps = {
  // bla: 'test',
};

export default ListItem;
