function sum(num1, num2){
    return num1 + num2;
}
console.log("The result is: " + sum(100, 300));

function product(num1, num2){
    return num1 * num2;
}
console.log("The result is: " + product(100, 300));

function raisedToPower(num, pow){
    return Math.pow(num, pow);
}

let num1 = 5;
let num2 = 2;
power = raisedToPower(num1, num2);
console.log(`${num1} raised to the power of ${num2} is: ${power}`);