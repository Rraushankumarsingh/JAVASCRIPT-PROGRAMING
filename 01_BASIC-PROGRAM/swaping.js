// let a=5;
// let b=6;
// console.log(`the value of a is: ${a}\n the valuse of b : ${b}`);
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(` after swipping the value of a is: ${a} the valuse of b : ${b}`);
//without using temp variable
let a=5;
let b=6;
console.log(`the value of a is: ${a}\n the valuse of b : ${b}`);
a=a+b;
b=a-b;
a=a-b;
console.log(` after swaping the value of a is: ${a}\n the valuse of b : ${b}`);