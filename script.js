const correctPassword = "07/06/25";

function checkPassword(){

let input = document.getElementById("password").value;
let error = document.getElementById("error");

if(input === correctPassword){

sessionStorage.setItem("auth","true");
document.getElementById("login").style.display="none";

}else{

error.style.display="block";

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