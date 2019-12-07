alert("AAA")

var usernameG = "a"
var passwordG = "p"

  function login(){
    var username =document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
 if(username == usernameG && password ==passwordG){
		window.location.href("C:/Users/User/Desktop/Proiect PIU/Login.pagina_start.html");
	}
	else{
		alert("Username sau parola gresita")
	}
	
}

