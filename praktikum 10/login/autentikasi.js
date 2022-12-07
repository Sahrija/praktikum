function login() {
  event.preventDefault()

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "ahmad2017" && password == "a") {
    location.replace("success.html"); 
  }
  else{
    alert("pasword atau username tidak cocok");
  }
}; 
