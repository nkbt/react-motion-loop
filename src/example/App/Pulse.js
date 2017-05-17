import React from 'react';
import {spring, presets} from 'react-motion';
import {ReactMotionLoop} from '../..';


const styleFrom = {
  width: 0,
  height: 0,
  borderRadius: 0
};
const styleTo = {
  width: spring(100, presets.stiff),
  height: spring(100, presets.stiff),
  borderRadius: spring(50, presets.stiff)
};


export const Pulse = () =>
  <ReactMotionLoop
    styleFrom={styleFrom}
    styleTo={styleTo}>
    {style => <div className="element" style={style} />}
  </ReactMotionLoop>;
