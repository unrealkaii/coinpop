import React, { Component } from 'react';
import Coinlist from './components/CoinList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header App-logo">
          <h1>Coin Pop</h1>
        </header>
        <Coinlist />
      </div>
    );
  }
}

export default App;
