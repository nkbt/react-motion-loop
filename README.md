# react-motion-loop [![npm](https://img.shields.io/npm/v/react-motion-loop.svg?style=flat-square)](https://www.npmjs.com/package/react-motion-loop)

Looping animation for react-motion Spring


[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![Build](https://img.shields.io/circleci/project/nkbt/react-motion-loop.svg?style=flat-square)](https://circleci.com/gh/nkbt/react-motion-loop)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/react-motion-loop.svg?style=flat-square)](https://codecov.io/github/nkbt/react-motion-loop?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/react-motion-loop.svg?style=flat-square)](https://david-dm.org/nkbt/react-motion-loop)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-motion-loop.svg?style=flat-square)](https://david-dm.org/nkbt/react-motion-loop#info=devDependencies)


## Installation

### NPM
```sh
npm install --save react react-motion react-motion-loop
```

Don't forget to manually install peer dependencies (`react`, `react-motion`) if you use npm@3.


### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/dist/react.min.js"></script>
<script src="https://unpkg.com/react-motion/build/react-motion.js"></script>
<script src="https://unpkg.com/react-motion-loop/build/react-motion-loop.min.js"></script>
(Module exposed as `ReactMotionLoop`)
```


## Demo

[http://nkbt.github.io/react-motion-loop](http://nkbt.github.io/react-motion-loop)

## Codepen demo

[https://codepen.io/nkbt/pen/ybqmWw](https://codepen.io/nkbt/pen/ybqmWw)

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {spring} from 'react-motion';
import {ReactMotionLoop} from 'react-motion-loop';


const App = () => (
  <div>
    <h1>Looping animation</h1>
    <ReactMotionLoop
      styleFrom={{width: spring(0), height: spring(0)}}
      styleTo={{width: spring(100), height: spring(100)}}>
      {style => <div style={style} />}
    </ReactMotionLoop>

    <h1>Pulsing animation</h1>
    <ReactMotionLoop
      styleFrom={{width: 0, height: 0}} // Instantly jump to the initial style
      styleTo={{width: spring(100), height: spring(100)}}>
      {style => <div style={style} />}
    </ReactMotionLoop>
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

#### `styleFrom`: PropTypes.object.isRequired

Initial style for animated element, used for ReactMotion's `defaultStyle` and as returning animation


#### `styleTo`: PropTypes.object.isRequired

Element is animated to this style, used for ReactMotion's `style`


#### All arbitrary props will be transferred to `<Motion>` as is

WARN: passing `onRest`, `style` or `defaultStyle` will override looping behavior, since internally `Motion` is used like:
```js
<Motion
  defaultStyle={defaultStyle}
  onRest={this.onRest}
  style={style}
  {...props} />
```


## Development and testing

Currently is being developed and tested with the latest stable `Node 7` on `OSX`

To run example covering all `ReactMotionLoop` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-motion-loop.git
cd react-motion-loop
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
