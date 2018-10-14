import React, { Component } from 'react';

class CoinList extends Component {
    render() {
       return (
        <div className="Coinlist">
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Market Cap ($)</th>
                <th>24hr Volume ($)</th>
                <th>Price ($)</th>
            </tr>
        </table>
        </div>
       )
    }
}

export default CoinList;