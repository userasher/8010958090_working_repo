const railwayModel = require("../models/railwayModel");
const userModel = require("../models/userModels");
/** generate to pdf  */
const ejs = require("ejs");
const { response } = require("express");
const pdf = require("html-pdf");
const path = require("path");
const homeModel = require("../models/homeModel");

const getAllUsersController = async (req, res) => {
  try {
    const doctors = await railwayModel.find({});
    res.status(200).send({
      success: true,
      message: "Doctors Data list",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};

// const getAllDoctorsController = async (req, res) => {
//   try {
//     const doctors = await railwayModel.find({});
//     res.status(200).send({
//       success: true,
//       message: "Doctors Data list",
//       data: doctors,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "error while getting doctors data",
//       error,
//     });
//   }
// };
const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await railwayModel.find({}).sort({ createdAt: -1 });
    // 'createdAt' is the field added by the 'timestamps' option in the schema, and -1 means descending order (latest first)

    res.status(200).send({
      success: true,
      message: "Doctors Data list",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};

const getAllDoctorsPrintController = async (req, res) => {
  try {
    const doctors = await railwayModel
      .find({ status: "approved" })
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Doctors Data list",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};
// account status changer

const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctors = await railwayModel.findByIdAndUpdate(doctorId, {
      status,
    });
    const user = await userModel.findOne({ _id: doctors.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "applicants-account-request-updated",
      message: `Your Application Account Request has been ${status}`,
      onClickPath: "/notification",
    });
    // extra thing h
    user.isDoctor = status === "approved" ? true : false;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Account status Updated ",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};
const addTicketNO = async (req, res) => {
  try {
    const { doctorId, no } = req.body;
    const doctors = await railwayModel.findByIdAndUpdate(doctorId, {
      railwayTicketNo: no,
    });

    await railwayModel.save();
    res.status(200).send({
      success: true,
      message: " Railway ticket no updated ",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: " Railway ticket not updated",
      error,
    });
  }
};
// doctor account status
// const changeVerificationStatusController = async (req, res) => {
//   try {
//     const { doctorId, verificationstatus } = req.body;
//     const doctor = await railwayModel.findByIdAndUpdate(doctorId, {
//       verificationstatus,
//     });
//     const user = await userModel.findOne({ _id: doctor.userId });
//     const notifcation = user.notifcation;
//     notifcation.push({
//       type: "notification-for-account-request-updated",
//       message: `Your Application Account Request Has been verified successfully `,
//       onClickPath: "/notification",
//     });
//     user.isVerified === "approved" ? true : false;
//     await user.save();
//     res.status(201).send({
//       success: true,
//       message: "Account Status verified",
//       data: doctor,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Eror in Account Status verification",
//       error,
//     });
//   }
// };
const changeVerificationStatusController = async (req, res) => {
  try {
    const { doctorId, verificationstatus } = req.body;
    const doctors = await railwayModel.findByIdAndUpdate(doctorId, {
      verificationstatus,
    });
    const user = await userModel.findOne({ _id: doctors.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "applicants-account-request-updated",
      message: `Your Application Account Request has been Verified Successfully`,
      onClickPath: "/notification",
    });
    // extra thing h
    user.isVerified = verificationstatus === "approved" ? true : false;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Account status Updated ",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};
const addtheRailwayNo = async (req, res) => {
  try {
    const { doctorId, railwayTicket } = req.body;
    const doctors = await railwayModel.findByIdAndUpdate(doctorId, {
      railwayTicket,
    });

    res.status(200).send({
      success: true,
      message: "registration no added",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while adding registration no data",
      error,
    });
  }
};
const getHome = async (req, res) => {
  const todo = await homeModel.find();
  res.send(todo);
};
const saveHome = async (req, res) => {
  const { text } = req.body;
  homeModel.create({ text }).then((data) => {
    console.log("Added successfully");
    res.send(data);
  });
};
const updateHome = async (req, res) => {
  const { _id, text } = req.body;
  homeModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated successfully"))
    .catch((err) => console.log(err));
};
const deleteHome = async (req, res) => {
  const { _id } = req.body;
  homeModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err));
};
/** Generate pdf */
const exportUserPdf = async (req, res) => {
  try {
    const users = await railwayModel.find({});
    // res.status(200).send({
    //   success: true,
    //   message: "generate pdf list",
    //   data: users,
    // });
    const data = {
      users: users,
    };
    const filePathName = path.resolve(
      __dirname,
      "../client/src/pages/admin/Users.js"
    );
    const htmlString = fs.readFileSync(filePathName).toString();
    let options = {
      format: "Letter",
    };
    const ejsData = ejs.render(htmlString, data);
    pdf.create(ejsData, options).toFile("users.pdf", (err, response) => {
      if (err) console.log(err);
      console.log("file generated");
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while pdf controller",
      error,
    });
  }
};
/** Uploading images */

module.exports = {
  getHome,
  deleteHome,
  updateHome,
  saveHome,
  getAllDoctorsController,
  getAllUsersController,
  changeAccountStatusController,
  exportUserPdf,
  changeVerificationStatusController,
  addtheRailwayNo,
  addTicketNO,
  getAllDoctorsPrintController,
};
