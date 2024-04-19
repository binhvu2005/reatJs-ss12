"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Monday";
    WeekDays["Tuesday"] = "Tuesday";
    WeekDays["Wednesday"] = "Wednesday";
    WeekDays["Thursday"] = "Thursday";
    WeekDays["Friday"] = "Friday";
    WeekDays["Saturday"] = "Saturday";
    WeekDays["Sunday"] = "Sunday";
})(WeekDays || (WeekDays = {}));
function printEnumValues(enumObj) {
    const values = Object.keys(enumObj);
    for (const key of values) {
        console.log(key);
    }
}
let weekDays;
console.log("Các ngày trong tuần là:");
