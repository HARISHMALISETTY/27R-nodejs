const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const newPath = path.join(__dirname, "media"); // creating new path
console.log(newPath);

if (!fs.existsSync(newPath)) {
  // checking whether path is existing or not
  fs.mkdir(newPath, () => {
    // if path is doesn't exists then create directort as per the path
    console.log("folder created");
  });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, newPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("invalid file type"));
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post("/register", upload.single("profile_pic"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("done");
});

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(400).send("only jpg.jpeg/png accepted");
  } else {
    next();
  }
});

app.listen(3125, () => {
  console.log("server running");
});
