const fs = require("fs");
let text  = fs.readFileSync("dele.txt", "utf-8");
console.log(text)

console.log("this is msg after some txt file");