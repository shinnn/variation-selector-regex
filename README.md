# variation-selector-regex

[![NPM version](https://img.shields.io/npm/v/variation-selector-regex.svg)](https://www.npmjs.com/package/variation-selector-regex)
[![Bower version](https://img.shields.io/bower/v/variation-selector-regex.svg)](https://github.com/shinnn/variation-selector-regex/releases)
[![Build Status](https://travis-ci.org/shinnn/variation-selector-regex.svg?branch=master)](https://travis-ci.org/shinnn/variation-selector-regex)
[![devDependencies Status](https://david-dm.org/shinnn/variation-selector-regex/dev-status.svg)](https://david-dm.org/shinnn/variation-selector-regex?type=dev)

Create a [regular expression](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for Unicode [variation selectors](http://www.unicode.org/reports/tr37/)

```javascript
import variationSelectorRegex from 'variation-selector-regex';

variationSelectorRegex(); //=> /([\u180B-\u180D\uFE00-\uFE0F]|\uDB40[\uDD00-\uDDEF])/g
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install variation-selector-regex
```

### [bower](https://bower.io/)

```
bower install variation-selector-regex
```

## API

### variationSelectorRegex()

Return: `RegExp`

It returns a `RegExp` instance that matches all variation selectors in a string.

```javascript
import variationSelectorRegex from 'variation-selector-regex';

'*☀︎☀️'.match(variationSelectorRegex()); //=> ['\uFE0E', '\uFE0F']
```

## Acknowledgements

[The regular expression used in this module](https://github.com/mathiasbynens/strip-variation-selectors/blob/fbdc1a2e621dc540cbf2d3d4adc0f70379a1d47a/strip-variation-selectors.js#L20) is copied from [mathiasbynens/strip-variation-selectors](https://github.com/mathiasbynens/strip-variation-selectors). Thanks, [Mathias Bynens](https://github.com/mathiasbynens).

## Licenses

### [mathiasbynens/strip-variation-selectors](https://github.com/mathiasbynens/strip-variation-selectors/tree/v1.0.0#license)

> strip-variation-selectors is available under the [MIT](https://mths.be/mit) license.

### variation-selector-regex

Copyright (c) 2016 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under the MIT License.
