import React from 'react';
import ReactDOM from 'react-dom';
import App from '@Components/App/App';

ReactDOM.render(<App />, document.querySelector('#root'));

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
