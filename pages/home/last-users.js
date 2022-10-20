const lastUsers = document.querySelector(".list-last");

export function lastUser(element) {
  const user = document.createElement("img");
  user.classList.add("last-user");
  user.src = element.avatar_url;
  lastUsers.appendChild(user);
}
