const express = require("express");

const app = express();

const fs = require("fs").promises;

// app.use(express.text())
app.use(express.json());

app.get("/data", (req, res) => {
  // res.set("content-type","application/json")
  // res.send({"name":"25r-27r"})
  // fs.readFile("./hello.txt","utf8",(err,data)=>{
  //     if(err){
  //         console.log(err)
  //         // res.send(err)
  //     }
  //     else{
  //         console.log(data,"hello file")
  //         // res.send(data)
  //     }
  // })
  // fs.readFile("./info.txt","utf8",(err,data)=>{
  //     if(err){
  //         console.log(err)
  //     }
  //     else{
  //         console.log(data,"info file")
  //     }
  // })
  // let hello_data=fs.readFileSync("./hello.txt","utf8")
  // let info_data=fs.readFileSync("./info.txt","utf8")
  // console.log(hello_data,"hello")
  // console.log(info_data,"info")
});

// app.post("/data", (req, res) => {
// //   let inputData = "something is fishy";

// let inputData=req.body;
// console.log(inputData)

//   fs.writeFile("./new.json", JSON.stringify(inputData), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("data insereted");
//       res.send("data inserted")
//     }
//   });
// });

app.post("/addContent", async (req, res) => {
  try {
    let inputData = req.body;
    let existingData = JSON.parse(await fs.readFile("./new.json", "utf8"));
    let isExistsAlready = existingData.find((x, y) => {
      return x.name == inputData.name;
    });
    console.log(isExistsAlready, "exists");
    if (isExistsAlready) {
      res.status(400).send({ message: "username already exists" });
    } else {
      existingData.push(inputData);
      let updatedData = existingData;
      await fs.writeFile("./new.json", JSON.stringify(updatedData));
      res
        .status(200)
        .send({ message: "data inserted", updatedData: updatedData });
    }
  } catch (err) {
    res.send(err);
  }

  //
});

app.delete("/file", async (req, res) => {
  try {
    await fs.unlink("./hello1.txt");
    res.status(200).send({ message: "file deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3211, () => {
  console.log("server is running");
});
