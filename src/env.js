export default {
  serverHost: process.env.NODE_ENV == "production" ? "https://ramltohtml-api.onrender.com" : "http://localhost:3001"
};