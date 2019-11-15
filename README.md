# react-motion-loop [![npm](https://img.shields.io/npm/v/react-motion-loop.svg?style=flat-square)](https://www.npmjs.com/package/react-motion-loop)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/react-motion-loop.svg?style=flat-square&label=build)](https://circleci.com/gh/nkbt/react-motion-loop)
[![Dependencies](https://img.shields.io/david/nkbt/react-motion-loop.svg?style=flat-square)](https://david-dm.org/nkbt/react-motion-loop)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-motion-loop.svg?style=flat-square)](https://david-dm.org/nkbt/react-motion-loop#info=devDependencies)

Looping animation for react-motion Spring

![React Height](./example/react-height.gif)

## Demo

[https://nkbt.github.io/react-motion-loop](https://nkbt.github.io/react-motion-loop)

## Codepen demo

[https://codepen.io/nkbt/pen/ybqmWw](https://codepen.io/nkbt/pen/ybqmWw)

## Installation

### NPM

```sh
npm install --save react-motion-loop
```

### yarn

```sh
yarn add react-motion-loop 
```

### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-motion/build/react-motion.js"></script>
<script src="https://unpkg.com/react-motion-loop/build/react-motion-loop.js"></script>
(Module exposed as `ReactMotionLoop`)
```


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

Currently is being developed and tested with the latest stable `Node` on `OSX`.

To run example covering all `ReactMotionLoop` features, use `yarn start`, which will compile `example/index.js`

```bash
git clone git@github.com:nkbt/react-motion-loop.git
cd react-motion-loop
yarn install
yarn start

# then
open http://localhost:8080
```

## Tests

```bash
# to run ESLint check
yarn lint

# to run tests
yarn test
```

## License

MIT
