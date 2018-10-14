import React, { Component } from 'react';

class CoinItem extends Component {
    
    render(){
        const item = this.props.item;

        return (
            <tr>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{item.market_cap}</td>
                <td>{item.volume_24h}</td>
                <td>{item.price}</td>
            </tr>
        );
    }
}

export default CoinItem;