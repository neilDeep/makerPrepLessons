
// Exercise 2
$(function(){
  $("body").css('background-color', 'red');
$("img").attr('src','https://i.imgur.com/nWGCwiE.gif');
    $("h1").text("hello");
    $("#notification").html('<div class="alert">Hold on! <b>an error</b> has occured!</div>');
    $(".container").append("<p>What's the difference between <i>.append()</i> and .html()?</p>");
});
// Exercise 3 - for different HTML
$(function() {
  $("h1").css('font-color', 'blue');
  $("body").css("background-color",'red');
  $("h1").text("Hello");
  $("#everything").css('font-size', "40px");
  $(".holder").css("border-style", "groove", "black");
  $("li").css("font-weight", "bold");
  $("p").css("color", "green");
  $("#secret").css("border-style", "black", "100px");
  $("#secret").css("display", "none");
});
