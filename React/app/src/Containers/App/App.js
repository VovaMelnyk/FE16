import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import Form from '../../Components/Form/Form';
import List from '../../Components/List/List';

class App extends React.Component {
  state = {
    content: '',
    list: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/posts').then(res =>
      this.setState({
        list: res.data,
      }),
    );
  }

  // componentDidUpdate() {
  //   axios.get('http://localhost:3000/posts').then(res =>
  //     this.setState({
  //       list: res.data,
  //     }),
  //   );
  // }

  inputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/posts', {
        text: this.state.content,
        complete: false,
      })
      .then(res =>
        this.setState(prev => ({
          list: [...prev.list, res.data],
          content: '',
        })),
      );
  };

  deleteItem = id => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(res => {
      // this.setState(prev => ({
      //   list: prev.list.filter(el => el.id !== id),
      // }));
      const { list } = this.state;
      const i = list.findIndex(el => el.id === id);
      const copyList = list.slice();
      copyList.splice(i, 1);
      this.setState({
        list: copyList,
      });
    });
  };

  completeItem = id => {
    const { list } = this.state;
    const updateItem = list.find(el => el.id === id);
    updateItem.complete = !updateItem.complete;
    axios.put(`http://localhost:3000/posts/${id}`, updateItem).then(res => {
      const i = list.findIndex(el => el.id === id);
      const copyList = list.slice();
      copyList.splice(i, 1, updateItem);
      this.setState({
        list: copyList,
      });
    });
  };

  // componentDidMount() {
  //   // axios.get('http://localhost:3000/posts').then(data => console.log(data));
  //   // axios.post('http://localhost:3000/posts', {
  //   //   name: 'test',
  //   //   last: 'last',
  //   // });
  //   // axios.delete('http://localhost:3000/posts/2');
  //   // axios.put('http://localhost:3000/posts/3', {
  //   //   name: 'test2222',
  //   //   last: 'last33333',
  //   // });
  // }

  render() {
    const { content, list } = this.state;
    return (
      <div className="App-container">
        <Form
          content={content}
          inputChange={this.inputChange}
          formSubmit={this.formSubmit}
        />
        <List
          list={list}
          deleteItem={this.deleteItem}
          completeItem={this.completeItem}
        />
      </div>
    );
  }
}

export default App;
