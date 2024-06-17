const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://47.238.36.103:8001",
      changeOrigin: true,
    })
  );
};
