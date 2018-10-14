import React, { Component } from 'react';
import CoinItem from './CoinItem';

class CoinList extends Component {
   
    render() {
      const coinlist = this.props.list.map(item => {
          return <CoinItem key={item.rank} item={item}/>
      });

      return (
        <div className="Coinlist">
        <table>
        <tbody>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Market Cap ($)</th>
                <th>24hr Volume ($)</th>
                <th>Price ($)</th>
            </tr>
            {coinlist}
            </tbody>
        </table>
        </div>
       );
    }
}

export default CoinList;