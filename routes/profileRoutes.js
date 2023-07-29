const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getProfileInfoCtrl,
  updateProfileController,
} = require("../controllers/profileCtrl");
const router = express.Router();
// Post SINGLE DOC INFO
router.post("/getProfileInfo", authMiddleware, getProfileInfoCtrl);
router.post("/updateProfileInfo", authMiddleware, updateProfileController);
// router.post("/getDoctorInfo", authMiddleware, getProfileInfoCtrl);

//POST UPDATE PROFILE
// router.post("/updateProfile", authMiddleware, updateProfileController);
module.exports = router;
