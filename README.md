# yhsd-egg

### Installation
```
  npm install yhsd-egg --save
```

### Futures
基于[egg.js](http://eggjs.org/zh-cn/)定制，与egg.js不同之处：
##### 中间件
- 增加cors（跨域）中间件，配置：

		exports.cors = {
			allowOrigin: 默认 '*'
			allowHeaders: 默认'Content-Type, Content-Length, Accept, X-Requested-With'
			allowMethods: 默认'PUT, POST, GET, DELETE, OPTIONS'
		}

##### 插件

- 关闭CSRF防范，避免本地测试时报invalid csrf token错误
- 增加yhsd-api插件，app.Yhsd可以直接获取yhsd-api, 免去require('yhsd-api')，且其中所有的prototype已经被bluebird promisifyAll，因此支持async。

		const Yhsd = app.Yhsd;
		const api = new Yhsd.Api(options);
		const customer = await api.getAsync(options)
