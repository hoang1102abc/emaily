//prod.js - production keys here
//dev.js -dont commit this
module.exports = {
  googleClientID: "process.env.GOOGLE_CLIENT_ID",
  googleClientSecret: "process.env.GOOGLE_CLIENT_SECRET",
  mongoURI: "process.env.MONGO_URI",
  cookieKey: "redacted",
  cookieKey: "process.env.COOKIE_KEY"
};