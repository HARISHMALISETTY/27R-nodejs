const bcrypt = require("bcrypt");
const fs=require("fs")

let password = "Iloveindia";

// bcrypt.hash(password, 10, (err, hash) => {
//   if (err) {
//     console.log(err);
//   } else {
    
//     fs.writeFile("./password.txt",hash,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("hashes password stored successfully")
//         }

//     })
//   }
// });

fs.readFile("./password.txt","utf8",(err,data)=>{

    if(err){
        console.log("error occured")
    }
    else{
        let storedpassword=data;
        bcrypt.compare(password,storedpassword,(err,result)=>{

            if(err){
                console.log("error while comparing")
            }
            else{
                // console.log(result)
                if(result){
                    console.log("correct password")
                }
                else{
                    console.log("incorrect password")
                }
            }
        })
    }
})
