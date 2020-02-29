import React from 'react';
import ReactDOM from 'react-dom';
import App from '@Components/App/App';
import { register } from './src/sw';

ReactDOM.render(<App />, document.querySelector('#root'));

register();
