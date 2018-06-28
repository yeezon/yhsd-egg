const Yhsd = require('yhsd-api');
const bluebird = require('bluebird');
bluebird.promisifyAll(Yhsd.Api.prototype);
bluebird.promisifyAll(Yhsd.Auth.prototype);
bluebird.promisifyAll(Yhsd.WebHook.prototype);

module.exports = {
  Yhsd,
}