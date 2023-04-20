//your JS code here. If required.
let date = new Date();

setInterval("function(){
	document.getElementById("timer").innerHTML=date.toLocaleString();
}",1000)