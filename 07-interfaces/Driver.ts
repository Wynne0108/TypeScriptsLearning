import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GoftCoach } from "./GolfCoach";

let myCricketCoacg = new CricketCoach();
let myGoftCoach = new GoftCoach();

//declare an array for coachs ... initially empty
let theCoaches: Coach[] = [];

//add the coaches to the array 
theCoaches.push(myCricketCoacg);
theCoaches.push(myGoftCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}