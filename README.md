[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-theme-voltaire.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-theme-voltaire)

# bespoke-theme-voltaire

A theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://markdalgleish.github.io/bespoke-theme-voltaire)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-theme-voltaire/master/dist/bespoke-theme-voltaire.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-theme-voltaire/master/dist/bespoke-theme-voltaire.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  voltaire = require('bespoke-theme-voltaire');

bespoke.from('#presentation', [
  voltaire()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.voltaire()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-voltaire
```

### Bower

```bash
$ bower install bespoke-theme-voltaire
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
