
var num = parseInt(prompt("Ingresa un número"));
if (num % 2 == 0 && num > 20) {
	window.alert("Perfect!");
}
else if(num % 2 == 0 && num > 2 && num < 5) {
	window.alert("Good!");
}
else if(num % 2 == 0 && num > 6 && num < 20){
	window.alert("Great!");
}
else{
	window.alert("Odd!");
}