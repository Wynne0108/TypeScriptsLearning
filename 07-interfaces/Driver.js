"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoacg = new CricketCoach_1.CricketCoach();
let myGoftCoach = new GolfCoach_1.GoftCoach();
//declare an array for coachs ... initially empty
let theCoaches = [];
//add the coaches to the array 
theCoaches.push(myCricketCoacg);
theCoaches.push(myGoftCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
