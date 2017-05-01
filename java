var login = function() {
	var person = prompt("Username:");
	var password = prompt("Password:");
	var username = ["Ryan", "Kieran", "Luca"];
	var pwd = ["1", "12","123"];
		for (e = 0; e < username.length; e++) {
		if (person === username[e]){
			for (w = 0; w < pwd.length; w++){
			if (password === pwd[w]){
				window.location="file:///H:/Documents/finalwebsite/finalweb.html"
				/* Both questions are asked even if their username is wrong */	
			confirm("WELCOME");	}		
			}else{
				alert("Your username or password is incorrect");
				/* If either their username or password isn't 12345 they can't login as me*/			
			}}
}
}
