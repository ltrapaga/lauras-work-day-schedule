
$(document).ready(function() {

$("#currentDay").text(dayjs().format("MMM "+ "DD, " + "YYYY"));

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

var saveBtn = $(".saveBtn")

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

currentTime();
saveData();

});