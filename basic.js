console.log("this is basic JS");

//functions in javascript

function greet(name, greettext="this is default value of greettext(good mornig)"){
    let name1 = "Name 1";   //local scope
    console.log(greettext + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c){
    let d = a + b + b;
    return d;
}

let name = "harry";
let name1 = "Rohan";
let name2 = "harshala";
let greettext = "good morning";

greet(name)
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);

console.log(name + "good boy");

let returnval  = sum(1,2,3);
console.log(returnval);

