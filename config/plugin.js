'use strict';
const path = require('path');

exports.yhsd = {
  enable: true,
  path: path.join(__dirname, '../plugin/yhsd-api'),
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
