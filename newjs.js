function kamehameha() {
	var win = window.open("target:_blank", "_self");
	var pass;
	pass = prompt("Enter your password");
    if(pass != "kamehameha"){
		alert("Try again");
    	pass = prompt("Enter password: ");
    	if(pass != "kamehameha"){
    		alert("2 attempts over. Bye!");
    		win.close();
    	}
    	else{
    		alert("You are now logged in!");
    		document.getElementById("trial").innerHTML = "Welcome, you have logged in!";
    	}
   	}
   	else{
    	   	alert("You are now logged in!");
    	   	document.getElementById("trial").innerHTML = "Welcome, you have logged in!";   	
	}

}
	