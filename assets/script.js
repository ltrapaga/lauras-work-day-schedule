$(document).ready(function() {

  $("#currentDay").text(dayjs().format("MMM "+ "DD, " + "YYYY"));

  function currentTime() {
    var current = dayjs().hour();
  
    $(".time-block").each(function() {
      var hour = parseInt($(this).attr("id"));

      if (hour > current) {
          $(this).addClass("future");
      } else if (current === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

currentTime();
});


