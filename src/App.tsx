import React, { Component } from 'react';
import Home from './components/home'

import NavigationPanel from './components/navigation-panel'

import './App.scss';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavigationPanel />
        <Home />
      </div>
    );
  }
}

export default App;
