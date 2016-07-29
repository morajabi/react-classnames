# rc-classnames
[![Version](http://img.shields.io/npm/v/rc-classnames.svg)](https://www.npmjs.org/package/rc-classnames)
[![Build Status](https://travis-ci.org/morajabi/rc-classnames.svg?branch=master)](https://travis-ci.org/morajabi/rc-classnames)
[![David](https://img.shields.io/david/morajabi/rc-classnames.svg?maxAge=2592000)]()
[![GitHub issues](https://img.shields.io/github/issues/morajabi/rc-classnames.svg?maxAge=2592000?style=flat)]()
[![Maintenance](https://img.shields.io/maintenance/yes/2016.svg?maxAge=2592000)]()


Manage classNames conditionally in React and JSX easily in **any format**

Install with npm:
```
npm install rc-classnames --save
```
Or with bower:
```
bower install rc-classnames
```
You can use CDN as well:
```
<script src="https://npmcdn.com/rc-classnames/index.js"></script>
```
You can use with UMD as well.

We use 	[SemVer](http://semver.org) for versioning.

## Why react-classnames
Do you remember when you wanted a button in JSX to have diffrent states conditionally? You might end up with something like this:
```js
<button className={'button' + (isDisabled ? ' button--disabled' : '') + (hasRadius ? '' : 'button--no-radius'} />
```
Or in ES6 syntax:
```js
<button className={`button${isDisabled && ' button--disabled'}${hasRadius || button--no-radius}`} />
```
Oh, It's very hard to read. But with rc-classnames those days are gone! It's intelligent! You can give it classNames in **Any Format** you want and it will generate a neat classname for you. Let's see how can we implement our button with rc-classnames:
```js
// ES6+:
import c from 'react-classnames';

// ES5
var c = require('react-classnames');

<button className={c('button', {
  'button--disabled': isDisabled,
  'button--no-radius': !hasRadius
})} />
```
Even with Arrays and Nested Arrays:
```js
<button className={c(
  ['button', 'header__button', ['button--large']],
  {
    'button--disabled': isDisabled,
    'button--no-radius': !hasRadius
  }
)} />
```
Or Arrays containing objects:
```js
<button className={c(
  'button',
  [
    'header__button',
    {
      'button--disabled': isDisabled,
      'button--no-radius': !hasRadius
    }
  ]
)} />
```
See? Give your classNames in **Any Format** you wish!

## Usage Without react
While main purpose of this library is using with React, you **can** use it without react, just call the exported function.

First import `index.js` file with script tag:
```
<script src="rc-classnames/index.js"></script>
```
`ReactClassNames` is available globally with Pure JS:
```
window.getElementById('someId').className = ReactClassNames('hey', { 'foo': true, 'bar': false });
```
We support UMD as well.

## TODO
- Add HoC for custom `classNames` prop in React
- ...
If you want a feature or have an idea, fill an issue and tell me what you want.

## Have problems?
I hope you don't have any problem with the library, but if library have problems, fill an issue containing the case with a seperate Repo and me or other friends will answer ASAP. Please double check your code before sumbiting issues.

## License
Copyright (c) 2016 Mohammad Rajabifard

The MIT License (MIT)
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
