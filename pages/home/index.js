import { getUser } from "./requests.js";
import { lastUser } from "./last-users.js";

const input = document.getElementById("input");
const button = document.getElementById("profile-btn");
const notFound = document.querySelector(".not-found");
const listUsers = JSON.parse(localStorage.getItem("last-users")) || [];

input.addEventListener("keyup", (e) => {
  if (e.target.value !== "") {
    button.classList.toggle("on-btn");
    button.disabled = false;
  } else {
    button.classList.toggle("on-btn");
    button.disabled = true;
  }
});

const imgBtn = document.createElement("img");
imgBtn.src = "../assets/spinner.png";

button.addEventListener("click", async (e) => {
  e.preventDefault();
  notFound.innerText = "";
  button.innerHTML = "";

  imgBtn.classList.add("img-btn");
  button.appendChild(imgBtn);

  const search = input.value;
  const req = await getUser(search);

  if (req.message) {
    button.classList.remove("img-btn");
    button.innerText = "Ver perfil do github";
    return (notFound.innerText = "Usuário não encontrado");
  }

  if (listUsers.length >= 3) {
    listUsers.splice(0, 1);
  }
  listUsers.push(req);

  localStorage.setItem("last-users", JSON.stringify(listUsers));
  localStorage.setItem("user", JSON.stringify(req));
  window.location.assign("pages/profile/profile.html");
});

listUsers.forEach((user) => lastUser(user));
