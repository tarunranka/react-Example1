import React, { Component } from 'react';
import { render } from 'react-dom';
import GrandMother from './GrandMother';
import './style.css';

const App = () => <GrandMother />

render(<App />, document.getElementById('root'));
