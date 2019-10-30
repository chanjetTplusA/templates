'use strict';

if (process.env.NODE_ENV_LINK) {
  module.exports = require('./src/index.js');
} else {
  module.exports = require('./dist/index.js');
}
