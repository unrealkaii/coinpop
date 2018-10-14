import React from 'react';
import ReactDOM from 'react-dom';
import CoinList from './CoinList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CoinList />, div);
    ReactDOM.unmountComponentAtNode(div);
});