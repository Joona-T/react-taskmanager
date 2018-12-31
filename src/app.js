import React from 'react';
import ReactDOM from 'react-dom';
import TaskManager from './components/TaskManager';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<TaskManager options={['Define your vision', 'Make a plan']}/>, document.getElementById('app'));

