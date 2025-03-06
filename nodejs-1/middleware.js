const express = require("express");
const app = express();
app.use(express.json());
// var is_valid = true;
// var is_eligible = false;
// app.use((req, res, next) => {
//   if (is_valid) {
//     next();
//     res.status(200).send("iam middleware 1");

//   } else {
//     res.status(404).send("some error at mw1");
//   }
// });

// app.use((req, res, next) => {

//   if(is_eligible){
//     res.status(200).send("iam middleware2");
//   }
//   else{
//     res.status(404).send("error occured at mw2");
//   }
// });

// app.get("/info", (req, res) => {
//   res.send("hii");
// });

// const middleware1 = (req, res, next) => {
//   if (true) {
//     next();
//   } else {
//     res.status(404).send("some error occured mw1");
//   }
// };

// const middleware2 = (req, res, next) => {
//   if (!true) {
//     next();
//   } else {
//     res.status(404).send("some error occured at mw2");
//   }
// };
const usernameValidator = (req, res, next) => {
  let inputName = req.body.username;
  var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  if (inputName.length <= 0) {
    res.status(400).send("username should not be empty");
  } else if (usernameRegex.test(inputName)) {
    next();
  } else {
    res.status(400).send("username format is invalid");
  }
};

const passwordValidator = () => {};

app.post("/signup", usernameValidator, (req, res) => {
  res.send("user registered successfully");
});

// app.get("/info", middleware1, middleware2, (req, res) => {
//   res.send("info");
// });

app.listen(3100, () => {
  console.log("server running");
});
