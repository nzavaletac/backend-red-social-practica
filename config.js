// module.exports = {
//   api: {
//     port: process.env.API_PORT || 3000,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET || "notasecret!",
//   },
//   // https://remotemysql.com
//   mysql: {
//     host: process.env.MYSQL_HOST || "remotemysql.com",
//     user: process.env.MYSQL_USER || "nidFt4twCs",
//     password: process.env.MYSQL_PASS || "mSlvqrInzY",
//     database: process.env.MYSQL_DB || "nidFt4twCs",
//   },
// };

module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "JGie5k2o3B",
    password: process.env.MYSQL_PASS || "LLxdLGU3vi",
    database: process.env.MYSQL_DB || "JGie5k2o3B",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
};
