export async function getUser(user) {
  const data = await fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}

export async function getRepository(repos) {
  const data = await fetch(`${repos}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

  return data;
}
