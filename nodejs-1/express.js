const express = require("express");
const app = express();
const fs = require("fs").promises; // it will returns data through the promise

app.use(express.json());

app.get("/data", async (req, res) => {
  try {
    let data = await fs.readFile("./users.json", "utf8");
    let parsedData = JSON.parse(data);
    res.status(200).json({
      status: 200,
      message: "data retrieved successfully",
      data: parsedData,
    });
  } catch (err) {
    res.status(500).send({ message: "something went wrong", err: err });
  }
});

app.post("/data", async (req, res) => {
  try {
    let newData = req.body;
    let existingData = JSON.parse(await fs.readFile("./users.json", "utf8"));
    existingData.push(newData);
    console.log(existingData);

    await fs.writeFile("./users.json", JSON.stringify(existingData));
    res
      .status(201)
      .json({ status: 201, message: "data inserted successfully" });
  } catch (err) {
    res.status(500).send({ message: "something went wrong", err: err });
  }
});

app.get("/databyId/:id", async (req, res) => {
  try {
    let index = req.params.id;
    let data = JSON.parse(await fs.readFile("./users.json", "utf8"));
    res.status(200).json({
      status: 200,
      message: "data retrieved successfully",
      data: data[index],
    });
  } catch (err) {
    res.status(500).send({ message: "something went wrong", err: err });
  }
});

app.get("/databyName/:name", async (req, res) => {
  try {
    let requestedName = req.params.name.toLowerCase();
    console.log(requestedName);
    let data = JSON.parse(await fs.readFile("./users.json", "utf8"));
    let result = data.filter((x, y) => {
      return x.name == requestedName;
    });

    console.log(result);
    if (result.length > 0) {
      res.status(200).json({
        status: 200,
        message: "data retrieved successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "data not found",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).send({ message: "something went wrong", err: err });
  }
});

app.put("/data", () => {});

app.listen("3100", () => {
  console.log("server running");
});
