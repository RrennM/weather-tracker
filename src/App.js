import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import LocationSeachForm from './components/LocationSeachForm/LocationSeachForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input = ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <LocationSeachForm onInput={this.onInputChange/>
        {/*<WeatherTypeCard /> */}
      </div>
    );
  }
}

export default App;
