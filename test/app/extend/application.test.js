'use strict';
const mock = require('egg-mock');
const assert = require('assert');

describe('application.test', () => {

  let app;
  before(() => {
    app = mock.app({
      // 转换成 test/fixtures/example
      baseDir: 'example',
      // 重要：配置 framework
      framework: true,
    });
    return app.ready();
  });

  it('Yhsd is attached, ok', () => {
    assert(app.Yhsd);
  });
});
