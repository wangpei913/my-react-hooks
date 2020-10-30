const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api/v1', {
        target: 'https://v1.hitokoto.cn/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '/': ''
        },
    }));
};