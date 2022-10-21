const { createUser, editUser } = require("../middlewares/user");

const router = require("express").Router();

// Create User
router.post("/signin", createUser);

// Create Edit User
router.put("/edit", editUser);

module.exports = router;
