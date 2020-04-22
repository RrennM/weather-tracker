import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import LocationSeachForm from './components/LocationSeachForm/LocationSeachForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      citySearched: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
    console.log( this.state.input )
  }

  // Need to create an onButtonSubmit function for updating the citySearched state from the input
  onButtonSubmit = () => {
    this.setState({ citySearched: this.state.input })
    console.log( this.state.input )
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <LocationSeachForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/*<WeatherTypeCard /> */}
      </div>
    );
  }
}

export default App;
