// 1. listen for user click on change button
// 2. save change in input field to user storage


//var getItemExample = localStorage.getItem("14")
//console.log(getItemExample)

var textAreaEl = $(".form-control")
var dateNow = moment().format("MMMM Do YYYY, hh:mm:ss a");
var timeNow = moment().hours();
var currentDayEl = $("#currentDay");

currentDayEl.text(dateNow);

var clock = $(".time-block");


$(".saveBtn").on("click", function() {
    var value = $(this)[0].previousElementSibling.value
    var time = $(this).siblings().eq(1).data("time");
    localStorage.setItem(time, value);
});

$.each(clock, function(i, value) {
    const x = parseInt(value.dataset.time)
    if(timeNow === x) {
        textAreaEl[i].setAttribute("class", "present form-control")
    } else if (timeNow < x) {
        console.log("future")
        textAreaEl[i].setAttribute("class", "future form-control")
    } 
    else 
        console.log("past")
        textAreaEl[i].setAttribute("class", "past form-control")
    }
    
);


function getNotes() {
    $.each(clock, function(i, value) {
        var notes = localStorage.getItem(value.dataset.time) || ""
        textAreaEl[i].value = notes
     
    })
}


getNotes();



// currentTime(timeNow);
