$(document).ready(function(){
//Display Date on page
//Create element to store current date and time
var now = moment().format("dddd, MMMM Do YYYY");
// console.log(now);
//Add to Current Day ID
$("#currentDay").text(now);
//===============================================

//Make variable for current hour
var currentHour = moment().format("HH");
var currentTime = moment().format("h:mm A");

//Display currentTime to Page
$("#currentTime").text(currentTime);
console.log(currentTime);
console.log(currentHour);

//Make an array of all the hours
var workHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

//Append 




});

