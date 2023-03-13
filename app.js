const loginform = document.querySelector("#login-form");
const loginInput = loginform.querySelector("input");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
}
loginform.addEventListener("submit", onLoginSubmit);