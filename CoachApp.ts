import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { TennisCoach } from "./TennisCoach";

let tennisCoach = new TennisCoach();
let golfCoach = new GolfCoach();

let theCoaches: Coach[] = [];
theCoaches.push(tennisCoach);
theCoaches.push(golfCoach);

for (let coach of theCoaches){
    console.log(coach.getDailyWork());
}
