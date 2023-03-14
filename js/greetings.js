const loginform = document.querySelector("#login-form");
const loginInput = loginform.querySelector("input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("#Chrome-app-clone-coding-with-VanillaJS");

function onLoginSubmit(event) {
    event.preventDefault();
    loginform.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(savedUsername);
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}