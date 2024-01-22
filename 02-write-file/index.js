
const readline = require('readline');
const fs = require("fs");


const writeStream = fs.createWriteStream("question.txt");

writeStream.on("error", (error) => console.log("Error", error.message));
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your favourite book? ', (book) => {
    console.log('Your favourite book is: ' + book);
    rl.close();
});

