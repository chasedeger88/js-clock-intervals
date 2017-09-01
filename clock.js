var hourRotate = 0;
var minRotate = 0;
var secondRotate = 0;

var elSec = document.getElementById("second");
var elmin = document.getElementById("minute");
var elhour = document.getElementById("hour");

var secClock = setInterval(function(){
  secondRotate+=6;
  elSec.style.transform = "rotate("+secondRotate+"deg)";
},1000);

var minClock = setInterval(function(){
  minRotate+=.1;
  elMin.style.transform = "rotate("+minRotate+"deg)";
},1000);

var hourClock = setInterval(function(){
  hourRotate+=.1;
  elHour.style.transform = "rotate("+hourRotate+"deg)";
},12000);