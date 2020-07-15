const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google","/api/stripe","/api/surveys","/api/users/:id","/api/surveys/:surveyId/:choice","/api/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};