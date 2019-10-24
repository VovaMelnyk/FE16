import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllListItems,
  getListItemCount,
  getFilteredItems,
  getCompleat,
} from '../redux/selectors';
class TodoList extends Component {
  render() {
    const { type, filteredCollection, collection } = this.props;
    console.log(type !== '' ? filteredCollection : collection);
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  collection: getAllListItems(state),
  collectionTotal: getListItemCount(state),
  filteredCollection: getFilteredItems(state),
  type: getCompleat(state),
});

export default connect(mapStateToProps)(TodoList);
