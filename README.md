# react-motion-loop [![npm](https://img.shields.io/npm/v/react-motion-loop.svg?style=flat-square)](https://www.npmjs.com/package/react-motion-loop)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/react-motion-loop.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/react-motion-loop)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/react-motion-loop.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/react-motion-loop)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/react-motion-loop.svg?style=flat-square)](https://codecov.io/github/nkbt/react-motion-loop?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/react-motion-loop.svg?style=flat-square)](https://david-dm.org/nkbt/react-motion-loop)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-motion-loop.svg?style=flat-square)](https://david-dm.org/nkbt/react-motion-loop#info=devDependencies)

React component-wrapper to swap one element with another and back, useful to show/hide popups, expand/collapse elements, various toggles, etc.

## Installation

### NPM
```sh
npm install --save react react-motion-loop
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-motion-loop/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-motion-loop/build/react-motion-loop.js"></script>
(Module exposed as `ReactMotionLoop`)
```


## Demo

[http://nkbt.github.io/react-motion-loop](http://nkbt.github.io/react-motion-loop)

## Codepen demo

```js
// TODO
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ReactMotionLoop} from 'react-motion-loop';

const App = () => (
  <div>
    <ReactMotionLoop />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

```js
// TODO
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 6` on `OSX` and `Windows`.

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
