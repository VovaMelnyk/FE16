import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import NewsCollection from '../../Components/NewsColection/NewsColection';

class App extends React.Component {
  state = {
    news: null,
    loader: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get('http://content.guardianapis.com/search?api-key=test')
      .then(answer =>
        this.setState({
          news: answer.data.response.results,
        }),
      )
      .catch(err =>
        this.setState({
          error: 'Sorry we could not find news, Try again later',
        }),
      )
      .finally(() =>
        this.setState({
          loader: false,
        }),
      );

    axios
      .get(
        'https://content.guardianapis.com/sport/live/2019/sep/24/cycling-road-world-championships-2019-womens-individual-time-trial-live?show-blocks=body&api-key=test',
      )
      .then(data => console.log(data));
  }

  renderContent = () => {
    const { loader, error, news } = this.state;
    if (loader) {
      return <Loader type="Plane" color="#00BFFF" height={100} width={100} />;
    } else if (error) {
      return <h3>{error}</h3>;
    } else {
      return <NewsCollection news={news} />;
    }
  };

  render() {
    const { news, loader, error } = this.state;
    return (
      <div className="App-container">
        <h1> Guardians News</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
