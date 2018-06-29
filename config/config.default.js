'use strict';

module.exports = appInfo => {
  const config = {};

  config.security = {
    /**
     * csrf开启时本地测试报过“invalid crsf token”，所以默认关掉
     * 需要再在应用层面手动打开
     */
    csrf: {
      enable: false,
    },
  };
  /**
   * 单元测试使用的配置，与框架实际功能无关
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };


  return config;
};
