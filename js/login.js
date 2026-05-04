
let signIn = document.querySelector(".signIn")
let signUp = document.querySelector(".signUp")
let userName = document.querySelector("#userName")
let password = document.querySelector("#password")
let signInBtn = document.querySelector("#signIn")
let form = document.querySelector("form")


let allUsers = JSON.parse(localStorage.getItem("usersList")) || []
// form.reset()

signInBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (userName.value === "" || password.value === "") {
        alert("please , fill data")
    }
    else {

        let userFound = allUsers.find(function (user) {
            return user.name === userName.value && user.password === password.value

        })
        if (userFound) {
            localStorage.setItem("userName", userFound.name)
            setTimeout(() => {
                location = "index.html"
                // form.reset()


            }, 1000)
        }

        else {

            alert("Your User Name or Password are wrong")
        }
    }
})









