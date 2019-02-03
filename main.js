$(function(){
  //change color input
  $("#paintColor").change(function(){
      $("#circle").css("background-color", $(this).val());
  });
  //change lineWidth using slider
  $("#slider").slider({
      min: 3,
      max: 30,
      slide: function(event, ui){
          $("#circle").height(ui.value);
          $("#circle").width(ui.value);
          ctx.lineWidth = ui.value;
      }
  });
});
