const path = require('path');
module.exports = {
  devServer: {
    proxy: {
      '/dev': {
        target: 'http://159.75.75.87:8082', //对应自己的接口
        // target: 'http://172.25.22.85:8086',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev': '',
        },
      },
    },
  },
};
