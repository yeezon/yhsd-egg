'use strict';
const path = require('path');

exports.yhsd = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/yhsd-api'),
};

exports.sequelize = {
  enable: false, // 框架层面不开启，否则会去连接数据库导致单元测试失败
  package: 'egg-sequelize',
}
