import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RadioManager from './RadioManager'
import registerServiceWorker from './registerServiceWorker';

const optionList = [
  { label: 'Label 1', value: 1 },
  { label: 'Label 2', value: 2 },
  { label: 'Label 3', value: 3 },
  { label: 'Label 4', value: 4 }
];

ReactDOM.render(<RadioManager options={optionList} />, document.getElementById('root'));
registerServiceWorker();
