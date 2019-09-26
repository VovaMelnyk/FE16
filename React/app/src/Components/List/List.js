import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
//import { Test } from './List.styles';

const List = ({ list, deleteItem, completeItem }) => (
  <ul>
    {list.map(el => (
      <ListItem
        {...el}
        key={el.id}
        deleteItem={deleteItem}
        completeItem={completeItem}
      />
    ))}
  </ul>
);

List.propTypes = {
  // bla: PropTypes.string,
};

List.defaultProps = {
  // bla: 'test',
};

export default List;
