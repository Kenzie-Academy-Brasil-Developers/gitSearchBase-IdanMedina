import { getUser } from "./requests.js";
import { saveLast,last } from "./users.js";

const input = document.getElementById("input");
const button = document.getElementById("profile-btn");
const notFound = document.querySelector(".not-found")

input.addEventListener("keyup", (e) =>{
if(e.target.value !== ""){
  button.classList.toggle("on-btn")
  button.disabled = false
}else{
  button.classList.toggle("on-btn")
  button.disabled = true
}
})

button.addEventListener("click", async  (e) => {
  e.preventDefault()
  notFound.innerText = ""
  /* button.innerText=""
  buttonimg.src.="../assets/spinner.png"; */
  const search = input.value;
  const req = await getUser(search);

 if(req.message/*=== 'Not Found'*/) {
    return notFound.innerText = "Usuário não encontrado";
}

  saveLast(req)

  localStorage.setItem("last-users", JSON.stringify(last))
  localStorage.setItem("user", JSON.stringify(req));
  window.location.assign("pages/profile/profile.html")
})

