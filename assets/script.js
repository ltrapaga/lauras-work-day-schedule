// Code included inside $( document ).ready() will only run once the page DOM is ready for JavaScript code to execute.
$(document).ready(function() {

// Retrieves current date from Day.js. Diplays the date in the the html <p> with the id "currentDay".
$("#currentDay").text(dayjs().format("MMM "+ "DD, " + "YYYY"));

/* Retrieves current hour from Day.js (0-23). Compares the hour of each time block with the current hour 
to determine which class (past, present, or future) will be added to which time block. */
function currentTime() {
  var current = dayjs().hour();
      $(".time-block").each(function() {
      var hour = parseInt($(this).attr("id"));
        if (hour > current) {
        $(this).addClass("future");
      }   else if (current === hour) {
          $(this).addClass("present");
      }     else {
            $(this).addClass("past");
      }
  })
};

// Defines variable for saveBtn.
var saveBtn = $(".saveBtn")

/* Creates data items inside local storage when the saveBtn is clicked. Displays the text that was saved 
to local storage in the textarea.description when the page is refreshed. */
saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var input = $(this).siblings(".description").val()
  localStorage.setItem(time, input);
});

function saveData() {
  $(".hour").each(function() {
    var currTime = $(this).text();
    var currInput = localStorage.getItem(currTime);
      if(currInput !== null) {
      $(this).siblings(".description").val(currInput);
    }
  });
}

// Calls currentTime and saveData functions.
currentTime();
saveData();

});