function register(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

if(email === "" || password === ""){
    alert("Fill all fields");
    return;
}

localStorage.setItem("userEmail",email);
localStorage.setItem("userPass",password);

document.getElementById("msg")
.innerText="Thanks for registering! Redirecting...";

setTimeout(()=>{
    window.location="game.html";
},2000);

}