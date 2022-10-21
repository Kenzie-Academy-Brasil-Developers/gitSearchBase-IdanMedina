import { getRepository } from "../home/requests.js";

const user = JSON.parse(localStorage.getItem("user"));
const changeUser = document.getElementById("change-user");
const email = document.getElementById("email");
const avatar = document.getElementById("avatar");
const name = document.querySelector(".name");
const bio = document.getElementById("bio");
const ul = document.querySelector(".project-list");

changeUser.addEventListener("click", () => {
  window.location.assign("../../index.html");
});

email.addEventListener("click", () => {
  email.href = `mailto:${user.email}`;
});

async function renderProfile(element) {
  const repoData = element.repos_url;
  const data = await getRepository(repoData);

  avatar.src = element.avatar_url;
  name.innerText = element.name;
  bio.innerText = element.bio;

  data.forEach((e) => {
    renderCard(e);
  });
}

function renderCard(repos) {
  const card = document.createElement("li");
  const divInfo = document.createElement("div");
  const divBtn = document.createElement("div");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  const repoBtn = document.createElement("button");
  const demoBtn = document.createElement("button");

  card.classList.add("card");
  divInfo.classList.add("info");
  divBtn.classList.add("project-btn");

  title.innerText = repos.name;
  paragraph.innerText = repos.description;
  repoBtn.innerText = "Repositório";
  repoBtn.id = "repos";
  demoBtn.innerText = "Demo";
  demoBtn.id = "demo";

  repoBtn.addEventListener("click", () => {
    if (repos.html_url !== null) {
      window.location.assign(repos.html_url);
    }
  });

  demoBtn.addEventListener("click", () => {
    if (repos.homepage !== null) {
      window.location.assign(repos.homepage);
    }
  });

  divInfo.append(title, paragraph);
  divBtn.append(repoBtn, demoBtn);
  card.append(divInfo, divBtn);
  ul.appendChild(card);
}

renderProfile(user);
