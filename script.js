var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");
var color1t = document.getElementById("color1t");
var color2t = document.getElementById("color2t");
var css = document.querySelector("h3");


function change1() {
	body.style.background = "linear-gradient(to right,"
	+ color1.value
	+","
	+ color2.value
	+")";
	color1.style.background = color1.value;
	color1t.value = color1.value;
	css.textContent = body.style.background + ";";
}


function change2() {
	body.style.background = "linear-gradient(to right,"
	+ color1.value
	+","
	+ color2.value
	+")";
	color2.style.background = color2.value;
	color2t.value = color2.value;
	css.textContent = body.style.background + ";";	
}

function start() {
	body.style.background = "linear-gradient(to right,"
	+ color1.value
	+","
	+ color2.value
	+")";
	css.textContent = body.style.background + ";";		
}



window.addEventListener('load',start);
color1.addEventListener("input",change1);
color2.addEventListener("input",change2);



