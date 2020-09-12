//Display Date on page
//Create element to store current date and time
var now = moment().format("dddd, MMMM Do YYYY");
console.log(now);
//Add to Current Day ID
$("#currentDay").text(now);
//===============================================
