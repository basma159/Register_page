

let links = document.querySelector("#links")
let user = document.querySelector("#user")

let userInfo =document.querySelector("#userInfo")

let loggedUser =localStorage.getItem("userName")

if (loggedUser) {
    links.remove()
    userInfo.style.display ="block"
    user.innerHTML =' <i class="fa-regular fa-user"></i> ' +"Hello , " + loggedUser
}

