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
var sampleHour = moment().format("H")

//Display currentTime to Page
$("#currentTime").text(currentTime);
console.log(currentTime);
console.log(currentHour);
console.log(sampleHour);

//Make an array of all the hours 
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Apply future class to the textarea
// $("textarea").addClass("future");
// $("textarea").addClass("future");

// for (var i = 0; i < workHours.length; i++) {
//     console.log(workHours[i]);
// }
var textOne = $("#text9").attr("hour", workHours[0]);

if (textOne < sampleHour) {
    console.log(textOne.addClass("past"));
} else if (textOne == sampleHour) {
    console.log(textOne.addClass("present"));
} else {
    console.log(textOne.addClass("future"));
};

//Setting local storage
$("#save9").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("9AM", $("#text9").val().trim())
});

$("#save10").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("10AM", $("#text10").val().trim())
});

$("#save11").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("11AM", $("#text11").val().trim())
});

$("#save12").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("12PM", $("#text12").val().trim())
});

$("#save13").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("1PM", $("#text13").val().trim())
});

$("#save14").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("2PM", $("#text14").val().trim())
});

$("#save15").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("3PM", $("#text15").val().trim())
});

$("#save16").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("4PM", $("#text16").val().trim())
});

$("#save17").on("click", function() {
    console.log("Ive been clicked")
    localStorage.setItem("5PM", $("#text17").val().trim())
});

//Access local storage
$("#text9").val(localStorage.getItem("9AM"));
$("#text10").val(localStorage.getItem("10AM"));
$("#text11").val(localStorage.getItem("11AM"));
$("#text12").val(localStorage.getItem("12PM"));
$("#text13").val(localStorage.getItem("1PM"));
$("#text14").val(localStorage.getItem("2PM"));
$("#text15").val(localStorage.getItem("3PM"));
$("#text16").val(localStorage.getItem("4PM"));
$("#text17").val(localStorage.getItem("5PM"));

});