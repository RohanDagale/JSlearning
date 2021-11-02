// syncronous or blocking   - line by line execution

// asynchornous or non-blocing   - line by line execution not guaranteed and callbacks will fire



const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(err, data);
});
console.log("this is a msg before txt file");