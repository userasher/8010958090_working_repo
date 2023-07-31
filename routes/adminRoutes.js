const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
  exportUserPdf,
  changeVerificationStatusController,
  addtheRailwayNo,
  addTicketNO,
  getAllDoctorsPrintController,
  getHome,
  saveHome,
  updateHome,
  deleteHome,
} = require("../controllers/adminCtrl");
const router = express.Router();
// get method || users
router.get("/getAllUsers", authMiddleware, getAllUsersController);
// get method || doctors
router.get("/getALLDoctors", authMiddleware, getAllDoctorsController);
router.get("/getALLpdf", authMiddleware, getAllDoctorsPrintController);

// POST Method || status changing
// generating pdf
router.get("/exportUsersPdf", authMiddleware, exportUserPdf);

router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
router.post("/addRailwayno", authMiddleware, addtheRailwayNo);
// router.get("/homeget", getHome);
// router.post("/updateHome", updateHome);
// router.post("/deletehome", deleteHome);
// router.post("/homesave", saveHome);
router.post(
  "/changeAccountStatustoVerify",
  authMiddleware,
  changeVerificationStatusController
);
router.post("/addNo", authMiddleware, addTicketNO);

module.exports = router;
