//your JS code here. If required.
function clock(){
let date = new Date();
document.getElementById("timer").innerHTML=date.toLocaleString();
	setTimeout("clock()",1000);
}
clock();
