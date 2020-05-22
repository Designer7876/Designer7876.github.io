function kamehameha() {
	var pass;
	pass = prompt("Enter the password. You get 2 attempts");
    if(pass != "kamehameha"){
		alert("Try again. You get one more attempt");
    	pass = prompt("Enter password: ");
    	if(pass != "kamehameha"){
    		alert("2 attempts over. Bye!");
		window.open("about:blank", "_self");
    		// window.close();
    	}
    	else{
    		alert("You are now logged in!");
    	}
   	}
   	else{
    	   	alert("You are now logged in!");
	}

}
	
