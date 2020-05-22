function kamehameha() {
	var win = window.open("", "_self");
	var pass;
	pass = prompt("Enter your password");
    if(pass != "kamehameha"){
		alert("Try again");
    	pass = prompt("Enter password: ");
    	if(pass != "kamehameha"){
    		alert("2 attempts over. Bye!");
    		window.close();
    	}
    	else{
    		alert("You are now logged in!");
    	}
   	}
   	else{
    	   	alert("You are now logged in!");
	}

}
	
