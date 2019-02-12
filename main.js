$(function(){

  $("#slider").slider({
    min: 3,
    max: 30,
    slide: function (event, ui) {
      $("#circle").height(ui.value);
      $("#circle").width(ui.value);
    }
  });

  var paint = false;
  var paint_erase = "paint";
  var canvas = document.getElementById("paint");
  var ctx = canvas.getContext("2d");
  var container = $("#paintbox");
  var mouse = {x: 0, y: 0};

  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  container.mousedown(function(e){
    paint = true;
    ctx.beginPath();

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    ctx.moveTo(mouse.x, mouse.y);
  });

  container.mousemove(function(e) {
    
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;

    if(paint == true){
      if(paint_erase == "paint"){
        ctx.strokeStyle = "red";
      }
      else{
        ctx.strokeStyle = "white";
      }

      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });

  container.mouseup(function(){
    paint = false;
  });
  container.mouseleave(function(){
    paint = false;
  });

  $("#reset").click(function(){
    ctx.clearRect(0, 0, 500, 400);
    paint_erase = "paint";
    $("#erase").removeClass("eraseMode");
  });

  $("#erase").click(function(){
    if(paint_erase == "paint"){
      paint_erase = "erase";
    }
    else{
      paint_erase = "paint";
    }

    $(this).toggleClass("eraseMode");
  });

});
