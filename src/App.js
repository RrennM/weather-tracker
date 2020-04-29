import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import LocationSeachForm from './components/LocationSeachForm/LocationSeachForm';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      citySearched: '',
      route: 'signin',
      isSignedIn: false
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

  onRouteChange = (route) => {
    if( route === 'signout' ) {
      this.setState({ isSignedIn: false })
    } else if ( route === 'home' ) {
      this.setState({ isSignedIn: true })
    }
  }

  render() {
    const { isSignedIn } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

        {/* What is needed next is to weite a ternary to determine which route is active and therefore which components
          need to be displayed. If route='home', display home, but if route='signin' display signin and so on. Then we need
          to get forms from tachyons for the signin and register components. */}
        <LocationSeachForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/*<WeatherTypeCard /> */}
      </div>
    );
  }
}

export default App;
