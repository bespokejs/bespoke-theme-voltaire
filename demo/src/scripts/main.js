var bespoke = require('bespoke'),
  voltaire = require('../../../lib/bespoke-theme-voltaire.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state');

bespoke.from('article', [
  voltaire(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  state()
]);
