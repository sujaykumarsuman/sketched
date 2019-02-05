$(function(){
  //change color input
  $("#paintColor").change(function(){
      $("#circle").css("background-color", $(this).val());
  });
  //change lineWidth using slider
  $("#slider").slider();
});
