const express = require("express");
const {
  // signup,
  // signin,
  // logout,
  // userProfile,
  // singleUser,
  authenticate,
} = require("../controllers/auth.controllers");
// const {isAuthenticated} = require("../middlewares/auth");
const router = express.Router();

// router.post("/signup", signup);
// router.post("/signin", signin);
// router.get("/logout", logout);
// router.get("/getme", userProfile);
// router.get("/user/:id", singleUser);
router.post("/authenticate", authenticate);

module.exports = router;
