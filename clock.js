setInterval(function(){
	var secondRotate = document.getElementById("second");
	secondRotate.style.transform = "rotate(" + (6 * degrees) + "deg)";
},60000);

setInterval(function(){
	var minRotate = document.getElementById("min");
	secondRotate.style.transform = "rotate(" + degrees + "deg)";
},360000);

setInterval(function(){
	var hourRotate = document.getElementById("hour");
	secondRotate.style.transform = "rotate(" + degrees + "deg)";
},21600000000);

secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360