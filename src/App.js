import React, { Component } from 'react';
import Coinlist from './components/CoinList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinlist: [],
    };
  }

  // https://coinlib.io/api/v1/coinlist?key=5d4da07f0f59e7a9&page=1&order=rank_asc
  componentDidMount(){
    fetch('https://coinlib.io/api/v1/coinlist?key=5d4da07f0f59e7a9&page=1&order=rank_asc')
     .then(response => {
       return response.json();
     })
     .then(data => {
       this.setState({coinlist: data.coins});
     });
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header App-logo">
          <h1>Coin Pop</h1>
        </header>
        <Coinlist list={this.state.coinlist} />
      </div>
    );
  }
}

export default App;
