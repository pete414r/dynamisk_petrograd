
	$(document).ready(function() {
var movementStrength = 50000;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25000;
          var newvalueY = height * pageY * -1 - 50000;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});
