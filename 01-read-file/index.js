const fs = require("fs");
const {Readable} = require('stream');


const stream = fs.createReadStream(__dirname + '/text.txt', "utf-8");

let data = "";

stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log("End", data));
stream.on("error", (error) => console.log("Error", error.message));