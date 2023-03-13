const loginform = document.querySelector("#login-form");
const loginInput = loginform.querySelector("input");


const link = document.querySelector("#Chrome-app-clone-coding-with-VanillaJS");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("clicked");
}

loginform.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);