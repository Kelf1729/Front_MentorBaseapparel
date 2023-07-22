const btn = document.querySelector("button");
const inputemail = document.getElementById("email");
const message = document.querySelector("label");
// Ajustar o icone de alerta
const erroralert = document.getElementsByClassName("icon-error");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const texto = inputemail.value;
  if (texto.trim() == "") {
    message.innerHTML = "Whoops, the input field is empty";
    message.classList.toggle("ativo");
    inputemail.classList.toggle("color-input");
  } else if (!emailRegex.test(texto.trim())) {
    message.innerHTML = "Whoops, The email address is not formatted correctly";
    message.classList.toggle("ativo");
    inputemail.classList.toggle("color-input");
  } else {
    message.innerHTML = "Perfect, welcome to new site";
    message.classList.toggle("ativo");
  }
});
