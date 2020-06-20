//prod.js - production keys here
//dev.js -dont commit this
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};

//sendgridkey: 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
