require("dotenv").config();

module.exports = {
    url: process.env.MONGO_URI_AIRBNB,
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV || "development"
};