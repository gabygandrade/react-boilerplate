import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {}

  async componentDidMount() {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/bulldog/french/images`);
      console.log({ response });
      // do something with response
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="App">
        App component
      </div>
    );
  }
}

export default App;
