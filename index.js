let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

let invalidFunction = e => {
  if (password.value !== confirmPassword.value) {
    if (password.classList.length === 0) {
      password.classList += "password-incorrect";
      confirmPassword.classList += "password-incorrect";
    }
  }
  else {
    if (password.classList.length === 1) {
      password.classList.remove("password-incorrect");
      confirmPassword.classList.remove("password-incorrect");
    }
  }
}

password.addEventListener("input", invalidFunction)

confirmPassword.addEventListener("input", invalidFunction)
