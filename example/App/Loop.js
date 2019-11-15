import React from 'react';
import {spring} from 'react-motion';
import {ReactMotionLoop} from '../..';


export const Loop = () => (
  <ReactMotionLoop
    styleFrom={{
      width: spring(0),
      height: spring(0),
      borderRadius: spring(0)
    }}
    styleTo={{
      width: spring(100),
      height: spring(100),
      borderRadius: spring(50)
    }}>
    {style => <div className="element" style={style} />}
  </ReactMotionLoop>
);
