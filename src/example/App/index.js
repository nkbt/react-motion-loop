import React from 'react';
import {Pulse} from './Pulse';
import {Loop} from './Loop';


import css from './App.css';


export const App = () =>
  <div className={css.app}>
    <h1>react-motion-loop</h1>
    <div className={css.container}>
      <h2>Pulse</h2>
      <Pulse />
    </div>
    <div className={css.container}>
      <h2>Loop</h2>
      <Loop />
    </div>
  </div>
;
