import { getUser } from "./requests.js";
import { saveLast,last } from "./users.js";

const input = document.getElementById("input");
const button = document.getElementById("profile-btn");
const notFound = document.querySelector(".not-found")

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

console.log(await getUser("xtrakey"))