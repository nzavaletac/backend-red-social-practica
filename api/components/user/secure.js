const auth = require("../../../auth");

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    switch (action) {
      case "update":
        //Todo lo que tenga que pasar
        const owner = req.body.id;
        auth.check.own(req, owner);
        next();
        break;
      default:
        next();
    }
  }
  return middleware;
};
