//Kyle McCloskey
$(document).ready(function() {
//Validate date format
alert("are you working?")
// 	debugger;
// var passWord = 12345
// var userName = ("kyle")

$("#password").change(function(pass){
	if($("#password").val() == ""){
		alert('password is blank');
	}else if($("#password").val() === "12345"){
		alert('welcome!');
	}else{
		alert('password invalid')
	}
});

$("#username").change(function(){
	if($("#username").val() == ""){
		alert('username is blank');
	}else if($("#username").val() === "kyle"){
		alert('welcome!');
	}else{
		alert('username invalid')
	}
});
$("#date1").change(function(){
	if($("#date1").val() == ""){
		alert('date is blank');
	}else if($("#date1").val() === "12"){
		alert('welcome!');
	}else{
		alert('date invalid')
	}
});
$("#date2").change(function(){
	if($("#date2").val() == ""){
		alert('date is blank');
	}else if($("#date2").val() === "08"){
		alert('welcome!');
	}else{
		alert('date invalid')
	}
});
$("#date1").change(function(){
	if($("#date3").val() == ""){
		alert('date is <b></b>lank');
	}else if($("#date3").val() === "2015"){
		alert('welcome!');
	}else{
		alert('date invalid')
	}
});
// $("#num").change(function(num){
// 	if($("#num").val() === {"a"; "b"; "c"; "d"; "e"; "f"; "g"; "h"; "i"; "j"; "k"; "l"; "m"; "n"; "o"; "p"; "q"; "r"; "s"; "t"; "u"; "v"; "w"; "x"; "y"; "z"}
// 		.html("<h1>You entered a letter</h1>")
// });

});