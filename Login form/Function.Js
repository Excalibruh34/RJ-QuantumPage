// Correct login credentials
var correctUsername = "Admin";
var correctPassword = "1234";

function checkLogin(){

    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if(username === correctUsername && password === correctPassword){
        alert("Login successful!");
        window.location.href = "Aboutme.Html";
    }
    else{
        document.getElementById("error-message").style.display = "block";
    }

}

function clearForm(){
    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("error-message").style.display = "none";
}