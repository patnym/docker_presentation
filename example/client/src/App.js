import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//We can read environment variables. This can be injected during the docker build process
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

class App extends Component {
  state = {
    MESSAGE: "Waiting..."
  };

  componentDidMount() {
    const self = this;
    fetch(API_URL)
      .then(data => data.text())
      .then((data) => {
        self.setState({
          MESSAGE: data
        });
      });
  }

  render() {
    const {
      MESSAGE
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {MESSAGE}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
