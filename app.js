$(document).ready(function() {
  $("#container").fadeIn(5000);

  //CODE FROM CLASS
  //$("p").on("mouseenter", function(){
  //$(this).css("background-color", "yellow");
  //});

  //$("p").on("mouseleave", function(){
  //  $(this).css("background-color", "white");
  //  });

  $("p").hover(function() {
    $(this).css("background", "yellow");
  },
  function() {
    $(this).css("background", "white");
  });

  $("h2").on("click", function(){
    $(this).animate({
      "opacity":"0.25",
      "margin-left":"20px"
    }, 1000, "swing", function (){
      $(".speech").animate({
        "opacity":".50"
      });
    });
  });
});
