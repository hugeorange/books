/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1658839900170_7356';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ], // 配置白名单
  };

  config.view = {
    mapping: { '.html': 'ejs' }, // 左边写成.html后缀，会自动渲染.html文件
  };

  const mysql = {
    // 单数据库信息配置
    client: {
      // host
      // host: 'localhost',
      host: '101.132.103.126',
      // 端口号
      port: '3306',
      // 用户名
      // user: 'root',
      user: 'cost',
      // 密码
      // password: '326242499',
      password: 'rKdMekwCKYh5dpJk',
      // 数据库名
      // database: 'juejin-cost',
      database: 'cost',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  const jwt = {
    secret: 'nickson',
  };

  const multipart = {
    mode: 'file',
  };

  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload',
    cors: {
      origin: '*',
      credentials: true, // 允许 Cookie 跨域跨域
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...userConfig,
    mysql,
    jwt,
    multipart,
  };
};
