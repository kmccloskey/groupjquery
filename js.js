//Kyle McCloskey
$(document).ready(function() {
//Validate date format
alert("are you working?")
// 	debugger;
// var passWord = 12345
// var userName = ("kyle")

$("#password").change(function(){
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
});
$("#date").change(function(){
	if($("#date").val() == ""){
		alert('date is blank');
	}else if($("#date").val() === "12/08/2015"){
		alert('welcome!');
	}else{
		alert('date invalid')
	}
});

});