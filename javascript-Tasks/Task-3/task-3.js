// #Assignment 3 =>
// if-else =>

// 1. Check if a number is odd or even and print on console

// let num = 9;
// if (num % 2 == 0) {
//     console.log("this is number is even");
// }
// else {
//     console.log("this is number is odd");
// }

// 2. Find the largest of two number

// function large(num1, num2) {
//     if (num1 > num2) {
//         console.log(`number-1 is larger, large no is ${num1}`);
//     }
//     else {
//         console.log(`number-2 is larger, large no is ${num2}`);
//     }
// }
// large(50, 10);

// 3. Perform arithmetic operations on two numbers

// let arithmeticOper = (a, b) => {
//     let c;
//     if (c = a + b) {
//         console.log(`addition is ${c}`);
//     }
//     if (c = a - b) {
//         console.log(`Subtractionis ${c}`);
//     }
//     if (c = a * b) {
//         console.log(`Multiplication ${c}`);
//     }
//     if (c = a / b) {
//         console.log(`Division ${c}`);
//     }
//     else{
//         console.log("Enter two no");
//     }
// }
// arithmeticOper(5, 3);


// For loop =>

// 1. Write a JS code to print numbers from 1 to 10

// for(let a=1; a <=10; a++){
//     console.log(a);
// }

// 2. Write a JS code to find the power of a number using for loop

// function number(num, power) {
//     let total = 1;
//     for (let i = 1; i <= power; i++) {
//         total = total * num;
//     }
//     return total;
// }
// let a = number(5, 5);

// console.log(a);

// 3. Write a JS code to print Even numbers

// for (let i = 0; 10 >= i; i++) {
//     if (i % 2 == 0) {
//         console.log("Even Number is:" + i);
//     }
// }

// Create a simple calculator using switch statement.

// const oprator = prompt("Enter oprator:- + ,- ,* , / ");

// const num1 = +prompt("Enter 1st number:- ");
// const num2 = +prompt("Enter 2nd number:- ");

// let result;

// switch (oprator) {
//     case "+":
//         result = num1 + num2;
//         console.log(`${num1} + ${num2} = ${result}`);
//         break;

//     case "-":
//         result = num1 - num2;
//         console.log(`${num1} + ${num2} = ${result}`);
//         break;

//     case '*':
//         result = num1 * num2;
//         console.log(`${num1} * ${num2} = ${result}`);
//         break;

//     case '/':
//         result = num1 / num2;
//         console.log(`${num1} / ${num2} = ${result}`);
//         break;
//     default:
//         console.log("enter valid oprator");
//         break;
// }

// 1. accept two numbers from user

// let num1 = +prompt("Enter 1st number:-");
// let num2 = +prompt("Enter 2nd number");
// console.log(num1 +" and "+ num2);


// 2. display the menu to user and accept the input as a sign (operator)
// menu ->
// + => addition,
// - => substraction
// * => multiplication
// / => division
// % => mod
// ** => power

// let operator = +prompt(`Enter oprator:-
//  + => addition,
//  - => substraction
//  * => multiplication
//  / => division
//  % => mod
//  ** => power`);


// 3. display/write the output on the screen. (e.g. Addition = 45)

// let a = 40;
// let b = 5;
// let c = a+b;
// console.log('Addition = ' + c);