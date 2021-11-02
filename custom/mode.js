
console.log("this is module");
function average(arr){
    let sum = 0;
    arr.forEach(elemnt => {
        sum += elemnt;
    });
    return sum/arr.length;
}

module.exports = average;