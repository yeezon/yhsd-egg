'use strict';
const { assert, app } = require('egg-mock/bootstrap');

describe('application.test', () => {

  it('Yhsd is attached, ok', () => {
    assert(!!app.Yhsd);
  });
});
