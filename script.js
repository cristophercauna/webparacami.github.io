const correctPassword = "1234";

function checkPassword(){

let input = document.getElementById("password").value;

if(input === correctPassword){

sessionStorage.setItem("auth","true");

document.getElementById("login").style.display="none";

}else{

alert("Contraseña incorrecta");

}

}

window.onload = function(){

if(sessionStorage.getItem("auth")==="true"){

let login = document.getElementById("login");
if(login){
login.style.display="none";
}

}

}