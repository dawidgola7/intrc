const baseUrl =
  process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "test";

module.exports = baseUrl;
