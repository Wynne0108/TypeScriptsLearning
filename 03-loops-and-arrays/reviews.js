"use strict";
let review = [10, 32, 0.304, 500, 1000];
let total = 0;
for (let i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
let avg = total / review.length;
console.log(`The Total number is ${total} , and the average is ${avg}`);
