var login = function() {
	var person = prompt("Username:");
	var username = ["Ryan", "Kieran", "Luca"];
	var pwd = ["1", "12","123"];
		for (e = 0; e < username.length; e++) {
			if (person === username[e]){
				/* Only if the username is right it will go to the password step. */
					var password = prompt("Password:");
				for (w = 0; w < pwd.length; w++){
					if (password === pwd[w]){
						window.location="file:///H:/Documents/finalwebsite/finalweb.html"
							confirm("WELCOME");	
					}
				}
			}else{
				/* If either their username or password isn't 12345 they can't login as me*/
				/* If either is wrong then nothing happens. I also had to do this to get rid of the 3 confirms.*/
			}
		}
}
