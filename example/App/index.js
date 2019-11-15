import React from 'react';
import {Pulse} from './Pulse';
import {Loop} from './Loop';


export const App = () => (
  <div className="app">
    <h1>react-motion-loop</h1>
    <div className="container">
      <h2>Pulse</h2>
      <Pulse />
    </div>
    <div className="container">
      <h2>Loop</h2>
      <Loop />
    </div>
  </div>
);
