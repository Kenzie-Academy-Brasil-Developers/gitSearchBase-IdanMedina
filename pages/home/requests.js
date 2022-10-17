async function getUser() {

    const data = await fetch("https://api.github.com/user")
    .then(res => res.json())
    .then(res => res)

    return data
}
getUser()



