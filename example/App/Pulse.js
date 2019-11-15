import React from 'react';
import {spring, presets} from 'react-motion';
import {ReactMotionLoop} from '../../src';


export const Pulse = () => (
  <ReactMotionLoop
    styleFrom={{
      width: 0,
      height: 0,
      borderRadius: 0
    }}
    styleTo={{
      width: spring(100, presets.stiff),
      height: spring(100, presets.stiff),
      borderRadius: spring(50, presets.stiff)
    }}>
    {style => <div className="element" style={style} />}
  </ReactMotionLoop>
);
