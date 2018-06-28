'use strict';

module.exports = options => {
  return async function(ctx, next) {
    ctx.set('Access-Control-Allow-Origin', options.allowOrigin || '*');
    ctx.set('Access-Control-Allow-Headers', options.allowHeaders || 'Content-Type, Content-Length, Accept, X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', options.allowMethods || 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method.toUpperCase() === 'OPTIONS') {
      ctx.status = 200;
    } else {
      await next();
    }
  };
};
