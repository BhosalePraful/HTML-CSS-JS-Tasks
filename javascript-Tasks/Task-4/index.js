//-------------------Array Methods----------------------//

//-----Adding & Removing =>

// push

// let num = [10,20,30];
// num.push(40);
// console.log(num);

// let nameArr = [ "a","b","c" ];
// nameArr.push("d");
// console.log(nameArr);

// pop

// let Arr = [ "z","x","c"];
//  Arr.pop();
// console.log(Arr);

// unshift

// let num = [21,44,33];
// num.unshift(555);
// console.log(num);

// shift

// let Arr = [ "z","x","c"];
//  Arr.shift();
// console.log(Arr);

//-----Modifying Array =>

// splice

// let arr = [50,60,70];
// arr.splice(2,0,100);
// console.log(arr);

// let arr = [50,60,70,80,90];
// arr.splice(1,2,100);
// console.log(arr);

// slice

// let Arr = [ "z","x","c","d"];
//  let ArrCopy = Arr.slice(1,3);
// console.log(ArrCopy);

// concat

// let arr = [50,60,70,];
// let newArr =[10,20,30];
// let add = arr.concat(newArr);
// console.log(add);

// fill

// let Arr = [ "z","x","c","d"];
//  Arr.fill("a");
// console.log(Arr);

// toString

// let Arr = [ "Mobile","laptop","monitor"];
// newArr = Arr.toString();
// console.log(newArr);

// join

// let Arr = [ "Mobile","laptop","monitor"];
//  let newArr = Arr.join(" & ");
// console.log(newArr);

//------Searching & Sorting =>

// sort

// let Mobile = ["realme", "samsung", "oppo", "mi", "Apple",];
// Mobile.sort();
// console.log(Mobile);

// includes

// let Mobile = ["realme", "samsung", "oppo", "mi", "Apple",];
// let mo = Mobile.includes("mi");
// console.log(mo);

// indexOf

// let Mobile = ["realme", "samsung", "oppo", "mi", "Apple",];
// let mo = Mobile.indexOf("mi");
// console.log(mo);

// reverse

// let Mobile = ["realme", "samsung", "oppo", "mi", "Apple",];
// let rev = Mobile.sort();
// let newArr = rev.reverse();
// console.log(newArr);

//------Static Array Methods =>

// Array.of

// let res = Array.of("array");
// console.log(res);

// Array.isArray

// let arr = Array.isArray("array");
// console.log(arr);

// Array.from

// let arr = Array.from("array");
// console.log(arr);

//------Array lterator Methods =>

// forEach

// let arr = [5, 10, 15, 20];

// let res = arr.forEach((number, index) => {
//   console.log("number:- " +" "+ number + " " + " index:- " + index );
// });


// map

// let arr = [5, 10, 15, 20];

// let res = arr.map((dubal) => {
//   return dubal * 2;
// });
// console.log(res);

// filter

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.filter((isEvan) => isEvan % 2 === 0);
// console.log(res);

// reduce

// let arr = [5,10,15,20];
// let res = arr.reduce((sum,number) => sum=sum+number);
// console.log(res);
