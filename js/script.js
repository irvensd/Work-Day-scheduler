// let rightNow = moment().format('ddd, MMM Do');
// let timer = document.getElementById("timer");
// timer.innerHTML = rightNow

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
let rightNow = moment().format('ddd, MMM Do');
let timer = $('#currentDay');
timer.text(rightNow)

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeTracker() {
    // get current number of hours
    var hour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var currDayHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if ( currDayHour < hour) {
        $(this).addClass("past");
      } 
      else if ( currDayHour === hour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var post = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, post);
    })
})
    // Local storage Item 
$("#morning-9 .description").val(localStorage.getItem("morning-9"));
$("#morning-10 .description").val(localStorage.getItem("morning-10"));
$("#morning-11 .description").val(localStorage.getItem("morning-11"));
$("#afternoon-12 .description").val(localStorage.getItem("afternoon-12"));
$("#afternoon-13 .description").val(localStorage.getItem("afternoon-13"));
$("#afternoon-14 .description").val(localStorage.getItem("afternoon-14"));
$("#afternoon-15 .description").val(localStorage.getItem("afternoon-15"));
$("#afternoon-16 .description").val(localStorage.getItem("afternoon-16"));
$("#afternoon-17 .description").val(localStorage.getItem("afternoon-17"));


timeTracker() 