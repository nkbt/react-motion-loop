import React from 'react';
import {spring} from 'react-motion';
import {ReactMotionLoop} from '../..';


const styleFrom = {
  width: spring(0),
  height: spring(0),
  borderRadius: spring(0)
};
const styleTo = {
  width: spring(100),
  height: spring(100),
  borderRadius: spring(50)
};


export const Loop = () =>
  <ReactMotionLoop
    styleFrom={styleFrom}
    styleTo={styleTo}>
    {style => <div className="element" style={style} />}
  </ReactMotionLoop>
;
