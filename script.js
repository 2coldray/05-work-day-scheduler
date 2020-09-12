$(document).ready(function(){

//Display Date on page
//Create element to store current date and time
var now = moment().format("dddd, MMMM Do YYYY");
// console.log(now);
//Add to Current Day ID
$("#currentDay").text(now);
//===============================================

//Make variable for current hour
var currentHour = moment().hour();
var currentTime = moment().format("h:mm A");
var sampleHour = moment().format("H")

//Display currentTime to Page
// $("#currentTime").text(currentTime);
console.log(currentTime);
console.log(currentHour);
console.log(sampleHour);

//Set times to text elements
var nine = $("#text9");
nine = 9;
var ten = $("#text10");
ten = 10;
var eleven = $("#text11");
eleven = 11;
var twelve = $("#text12");
twelve = 12;
var thirteen = $("#text13");
thirteen = 13;
var fourteen = $("#text14");
fourteen = 14;
var fifteen = $("#text15");
fifteen = 15;
var sixteen = $("#text16");
sixteen = 16;
var seventeen = $("#text17");
seventeen = 17;

//Assigning the blocks which colors to show based upon the time
if (currentHour > nine) {
    $("#text9").addClass("past")
} else if (currentHour == nine) {
    $("#text9").addClass("present")
} else {
    $("#text9").addClass("future")
};

if (currentHour > ten) {
    $("#text10").addClass("past");
} else if (currentHour == ten) {
    $("#text10").addClass("present");
} else {
    $("#text10").addClass("future");
};

if (currentHour > eleven) {
    $("#text11").addClass("past");
} else if (currentHour == eleven) {
    $("#text11").addClass("present");
} else {
    $("#text11").addClass("future");
};

if (currentHour > twelve) {
    $("#text12").addClass("past");
} else if (currentHour == twelve) {
    $("#text12").addClass("present");
} else {
    $("#text12").addClass("future");
};

if (currentHour > thirteen) {
    $("#text13").addClass("past");
} else if (currentHour == thirteen) {
    $("#text13").addClass("present");
} else {
    $("#text13").addClass("future");
};

if (currentHour > fourteen) {
    $("#text14").addClass("past");
} else if (currentHour == fourteen) {
    $("#text14").addClass("present");
} else {
    $("#text14").addClass("future");
};

if (currentHour > fifteen) {
    $("#text15").addClass("past");
} else if (currentHour == fifteen) {
    $("#text15").addClass("present");
} else {
    $("#text15").addClass("future");
};

if (currentHour > sixteen) {
    $("#text16").addClass("past");
} else if (currentHour == sixteen) {
    $("#text16").addClass("present");
} else {
    $("#text16").addClass("future");
};

if (currentHour > seventeen) {
    $("#text17").addClass("past");
} else if (currentHour == seventeen) {
    $("#text17").addClass("present");
} else {
    $("#text17").addClass("future");
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