$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $(".text1").click(function() {
    $(".text1").toggle();
    $(".text2").toggle();
  });

  $(".text2").click(function() {
    $(".text1").toggle();
    $(".text2").toggle();
  });

  // $(".text1").click(function() {
  //   $("p").removeClass('red');
  //   $("p").addClass('green');
  // });

});