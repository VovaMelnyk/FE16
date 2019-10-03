import React from 'react';
import './App.css';
import Red from '../../Components/Red/Red';
import AppProvider from '../../Context/Context';
import Modal from '../../Components/Modal/Modal';

class App extends React.Component {
  // state = {
  //   textModal: false,
  //   formModal: false,
  // };

  // openTextModal = () => {
  //   this.setState({
  //     textModal: true,
  //   });
  // };

  // openFormModal = () => {
  //   this.setState({
  //     formModal: true,
  //   });
  // };

  // closeModal = value => {
  //   this.setState({
  //     [value]: false,
  //   });
  // };
  render() {
    // const { textModal, formModal } = this.state;
    return (
      // <>
      //   <button onClick={this.openTextModal}>Open text modal</button>
      //   <button onClick={this.openFormModal}>Open form modal</button>
      //   {textModal && (
      //     <Modal value="textModal" close={this.closeModal}>
      //       <h2>Title</h2>
      //       <p>Test user content</p>
      //     </Modal>
      //   )}

      //   {formModal && (
      //     <Modal value="formModal" close={this.closeModal}>
      //       <form>
      //         <input type="text" />
      //         <input type="text" />
      //         <input type="text" />
      //         <input type="text" />
      //       </form>
      //     </Modal>
      //   )}
      // </>
      <AppProvider>
        <div className="App-container">
          <Red />
        </div>
      </AppProvider>
    );
  }
}

export default App;
