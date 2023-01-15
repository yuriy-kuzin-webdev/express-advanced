const express = require("express");
const userController = require("../controllers/user-controller");
const router = express.Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.post("/refresh", userController.refresh);
router.post("/users", userController.getUsers);

module.exports = router;
