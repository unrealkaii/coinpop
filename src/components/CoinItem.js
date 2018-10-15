import React, { Component } from 'react';

class CoinItem extends Component {
    
    render(){
        const item = this.props.item;

        return (
            <tr>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{Number(item.market_cap).toFixed(2)}</td>
                <td>{Number(item.volume_24h).toFixed(2)}</td>
                <td>{Number(item.price).toFixed(2)}</td>
            </tr>
        );
    }
}

export default CoinItem;