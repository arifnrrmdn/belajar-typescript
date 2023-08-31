"use strict";
exports.__esModule = true;
var GolfCoach_1 = require("./GolfCoach");
var TennisCoach_1 = require("./TennisCoach");
var tennisCoach = new TennisCoach_1.TennisCoach();
var golfCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(tennisCoach);
theCoaches.push(golfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWork());
}
