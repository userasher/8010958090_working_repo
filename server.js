const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const multer = require("multer");
const { uploadImage } = require("./controllers/adminCtrl");
const router = require("./routes/userRoutes");
const path = require("path");
const ImageModel = require("./models/imageModels");

// const ImageModel = require("./models/documentModel");
// const fs = require("fs");
//dotenv conig

dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));
app.use(express.static("public"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/profile", require("./routes/profileRoutes"));

/***For uploading ********************* */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});
// app.post("/upload", upload.single("single_input"), (req, res) => {});
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  // console.log(req.file);
  ImageModel.create({ image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get("/api/v1/getImage", (req, res) => {
  ImageModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
/** for file uploading */
app.delete("/api/v1/deleteImage/:imageId", (req, res) => {
  const imageId = req.params.imageId;

  // Find the image by ID in the database
  ImageModel.findById(imageId)
    .then((image) => {
      if (!image) {
        return res.status(404).json({ error: "Image not found" });
      }

      // Delete the image from storage (if needed, e.g., if stored in the filesystem)
      // fs.unlinkSync(path.join(__dirname, "uploads", image.filename));

      // Delete the image from the database
      return image.remove();
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      console.error("Error deleting image:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});
/*********For uploading codes */
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
