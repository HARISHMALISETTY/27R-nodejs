const http = require("http");
const url = require("url");
const fs = require("fs");
const { type } = require("os");

// const server = http.createServer((req, res) => {
//   res.write("welcome to nodejs");
//   res.end("");
// });
// let obj = { name: "karthik", city: "hyd" };

// const server = http.createServer((req, res) => {
//   // console.log(req.url)
//   // const parsedURl=url.parse(req.url,true);
//   // console.log(parsedURl)
//   // console.log(parsedURl.pathname)
//   // const tickets=parsedURl.query.tickets;

//  const parsedURl= url.parse(req.url,true)
//  console.log(parsedURl)
//  const tickets=parsedURl.query.tickets

//    if (req.method == "GET") {
//     if (parsedURl.pathname == "/CHAAVA") {
//       res.writeHead(200, "ok", { "content-type": "application/json" });
//       res.write(JSON.stringify({ "movie name": "CHAAVA", screen: "one",numberofTickets:tickets }));
//       res.end();
//     } else if (parsedURl.pathname == "/THANDEL") {
//       res.writeHead(200, "ok", { "content-type": "application/json" });
//       res.write(JSON.stringify({ "movie name": "THANDEL", screen: "two",numberofTickets:tickets }));
//       res.end();
//     } else if (parsedURl.pathname == "/SKYFORCE") {
//       res.writeHead(200, "ok", { "content-type": "application/json" });
//       res.write(JSON.stringify({ "movie name": "SKYFORCE", screen: "three",numberofTickets:tickets }));
//       res.end();
//     } else {
//       res.writeHead(400, "not found", { "content-type": "application/json" });
//       res.write(JSON.stringify({ message: "movie not showing now" }));
//       res.end();
//     }
//   } else if (req.method == "POST") {
//     res.end();
//   } else if (req.method == "PUT") {
//     res.end();
//   } else if (req.method == "DELETE") {
//     res.end();
//   } else {
//     res.end();
//   }
// });

// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {
//     const parsedurl = url.parse(req.url, true);
//     console.log(parsedurl);
//     if (parsedurl.pathname == "/menu") {
//       res.writeHead(200, "ok", { "content-type": "application/json" });
//       res.write(
//         JSON.stringify({
//           veg: [{ panner: "150rs", gobi: "120rs" }],
//           nonveg: [{ chicken: "225rs", fish: "240rs" }],
//           message: "thankyou for order",
//         })
//       );
//       res.end();
//     } else if (parsedurl.pathname == "/menu/veg") {
//       if (parsedurl.query.item == "panner") {
//         res.writeHead(200, "ok", { "content-type": "application/json" });
//         res.write(
//           JSON.stringify({
//             category: "veg",
//             item: parsedurl.query.item,
//             price: parsedurl.query.quantity * 150,
//             message: "thankyou for order",
//           })
//         );
//         res.end();
//       } else if (parsedurl.query.item == "gobi") {
//         res.writeHead(200, "ok", { "content-type": "application/json" });
//         res.write(
//           JSON.stringify({
//             category: "veg",
//             item: parsedurl.query.item,
//             price: parsedurl.query.quantity * 120,
//             message: "thankyou for order",
//           })
//         );
//         res.end();
//       } else {
//         res.writeHead(400, "not found", { "content-type": "application/json" });
//         res.write(JSON.stringify({ message: "item not available" }));
//         res.end();
//       }
//     } else if (parsedurl.pathname == "/menu/nonveg") {
//       res.writeHead(200, "ok", { "content-type": "application/json" });
//       res.write(
//         JSON.stringify({ category: "nonveg", message: "thankyou for order" })
//       );
//       res.end();
//     }

//     res.end();
//   } else if (req.method == "post") {
//     res.write("post request is not ready yet");
//     res.end();
//   } else {
//     res.write("invalid request");
//     res.end("");
//   }
// });

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//       console.log(body);
//     });
//     req.on("error", (err) => {
//       console.log(err);
//       res.write(err);
//     });
//     req.on("end", () => {
//       res.end("data received");
//     });
//   }
// });

const server = http.createServer((req, res) => {
  // if (req.method == "POST") {
  //   let ipData = "";

  //   req.on("data", (chunk) => {
  //     ipData += chunk.toString();
  //   });

  //   req.on("end", () => {
  //     fs.appendFile("./info.txt", ipData, (err) => {
  //       if (err) {
  //         res.write(err);
  //         res.end();
  //       } else {
  //         res.write("data inserted");
  //         res.end();
  //       }
  //     });
  //   });

  //   // fs.readFile(); // executes in asynchronous way
  //   // fs.readFileSync() // executes in synchronous way
  //   // fs.readFile("./sample.txt", "utf8", (err, data) => {
  //   //   if (err) {
  //   //     console.log(err);
  //   //     res.write(err);
  //   //     res.end();
  //   //   } else {
  //   //     console.log(data);
  //   //     // res.write(data);
  //   //     res.end();
  //   //   }
  //   // });

  //   // fs.readFile("./info.txt", "utf8", (err, data) => {
  //   //   if (err) {
  //   //     console.log(err);
  //   //     res.write(err);
  //   //     res.end();
  //   //   } else {
  //   //     console.log(data);
  //   //     // res.write(data)
  //   //     res.end();
  //   //   }
  //   // });

  //   // let ipData = "27r-10kcoders";
  //   // fs.writeFile("./info.txt", ipData, (err) => {
  //   //   if (err) {
  //   //     res.end(err);
  //   //   } else {
  //   //     res.write("data inserted");
  //   //     res.end();
  //   //   }
  //   // });

  //   // fs.appendFile("./info.txt",ipData,(err)=>{
  //   //   if(err){
  //   //     console.log(err);
  //   //     res.end(err)
  //   //   }
  //   //   else{
  //   //     res.end("data appended")
  //   //   }
  //   // })
  // }
  // if (req.method == "GET") {
  //   fs.readFile("./data.json", "utf8", (err, data) => {
  //     if (err) {
  //       res.write(err);
  //       res.end();
  //     } else {
  //       res.writeHead(200,"ok",{"content-type":"application/json"})
  //       // console.log(typeof JSON.parse(data))
  //       // res.write(data);
  //       // res.end();
  //       let existingData=JSON.parse(data);
  //       existingData.push(5);// array will be updated by adding 5
  //       console.log(existingData) //[1,2,3,4,5]
  //       fs.writeFile("./data.json",JSON.stringify(existingData),(err)=>{
  //         if(err){
  //           res.write(err)
  //           res.end()
  //         }
  //         else{
  //           res.write("data updated")
  //           res.end()
  //         }
  //       })
  //     }
  //   });
  // }

  if (req.method == "POST") {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        res.end(err);
      } else {
        let newName = "Ram";
        let existingData = JSON.parse(data);
        existingData.push(newName);
        fs.writeFile("./data.json", JSON.stringify(existingData), (err) => {
          if (err) {
            res.write(err);
            res.end()
          } else {
            res.write("data updated");
            res.end()
          }
        });
      }
    });
  }
});
server.listen("3105", () => {
  console.log("server running");
});
