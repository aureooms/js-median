[js-median](http://aureooms.github.io/js-median)
==

Median searching code bricks for JavaScript

[![License](https://img.shields.io/github/license/aureooms/js-median.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-median/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-median.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-median)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-median.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-median)
[![Build Status](https://img.shields.io/travis/aureooms/js-median.svg?style=flat)](https://travis-ci.org/aureooms/js-median)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-median.svg?style=flat)](https://coveralls.io/r/aureooms/js-median)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-median.svg?style=flat)](https://david-dm.org/aureooms/js-median#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-median.svg?style=flat)](https://david-dm.org/aureooms/js-median#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-median.svg?style=flat)](https://codeclimate.com/github/aureooms/js-median)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-median.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-median)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-median.svg?style=flat)](https://github.com/aureooms/js-median/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-median.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-median)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-median
# or
jspm install npm:@aureooms/js-median
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-median
```

### bower
```terminal
bower install @aureooms/js-median
```

### ender
```terminal
ender add @aureooms/js-median
```

### jam
```terminal
jam install @aureooms/js-median
```

### spm
```terminal
spm install @aureooms/js-median --save
```

### npm
```terminal
npm install @aureooms/js-median --save
```

## Require
### jspm
```js
let median = require( "github:aureooms/js-median" ) ;
// or
import median from '@aureooms/js-median' ;
```
### duo
```js
let median = require( "aureooms/js-median" ) ;
```

### component, ender, spm, npm
```js
let median = require( "@aureooms/js-median" ) ;
```

### bower
The script tag exposes the global variable `median`.
```html
<script src="bower_components/@aureooms/js-median/js/dist/median.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-median" ] , function ( median ) { ... } ) ;
```