'use strict';

if (process.env.NODE_ENV_LINK === 'link') {
  module.exports = require('./index.js');
} else {
  module.exports = require('../dist/index.js');
}
