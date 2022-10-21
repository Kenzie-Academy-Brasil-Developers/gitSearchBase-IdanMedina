const lastUsers = document.querySelector(".list-last");

export function lastUser(element) {
  const div = document.createElement("div");
  const user = document.createElement("img");
  const link = document.createElement("div");
  div.id = "lilbox";
  user.classList.add("last-user");

  user.addEventListener("mouseover", () => {
    link.classList.toggle("link");
    link.innerText = "Acessar este perfil";
  });
  user.addEventListener("mouseout", () => {
    link.classList.toggle("link");
    link.innerText = "";
  });

  link.addEventListener("mouseover", () => {
    link.classList.toggle("link");
    link.innerText = "Acessar este perfil";
  });
  link.addEventListener("mouseout", () => {
    link.classList.toggle("link");
    link.innerText = "";
  });
  link.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(element));
    window.location.assign("pages/profile/profile.html");
  });

  user.src = element.avatar_url;
  div.append(user, link);
  lastUsers.appendChild(div);
}
