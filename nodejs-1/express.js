const express = require("express");
const app = express();

app.get("/one", (req, res) => {
  res.send("hii iam get request");
});

app.post("/one", (req, res) => {
  res.send("hii iam post request");
});

app.put("/one", (req, res) => {
  res.send("hii iam put");
});

app.delete("/one", () => {});

app.patch("/one", () => {});

app.listen("3125", () => {
  console.log("server running");
});

// console.log(express)
