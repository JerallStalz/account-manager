const { login, refreshToken, logout } = require("../middlewares/auth");
const router = require("express").Router();

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Refresh Token
router.get("/token", refreshToken);

module.exports = router;
