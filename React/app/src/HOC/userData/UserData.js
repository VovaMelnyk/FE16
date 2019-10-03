// import React, { Component } from 'react';

// const UserData = (WrappedComponent = props => {
//   return class HigherOrderComponent extends Component {
//     state = {
//       userData: {},
//       isLoading: true,
//       isError: false,
//     };
//     componentDidMount() {
//       fetch(userUrl)
//         .then(res => res.json())
//         .then(data =>
//           this.setState({
//             userData: data,
//           }),
//         )
//         .catch(err =>
//           this.setState({
//             isError: err,
//           }),
//         )
//         .finally(() =>
//           this.setState({
//             isLoading: false,
//           }),
//         );
//     }
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// });

// export default UserData;
