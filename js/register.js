
let signIn = document.querySelector(".signIn")
let signUp = document.querySelector(".signUp")
let userName = document.querySelector("#userName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let signUpBtn = document.querySelector("#signUp")
let form = document.querySelector("form")



let allUsers = JSON.parse(localStorage.getItem("usersList")) || []

signUpBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let namePattern = /^[a-zA-Z\u0600-\u06FF\s]+$/

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (userName.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
        alert("please , fill data")
    }
    else if (!namePattern.test(userName.value)) {
        alert("Name must not contain numbers")
    }
    else if (!pattern.test(email.value)) {
        alert("Please , Enter A valid Email")
    }


    else {
        let userFound = allUsers.find(function (user) {
            return user.email === email.value

        })
        if (userFound) {
            alert("This Email is already registered!")

            setTimeout(() => {
                location = "index.html"
                form.reset()

            }, 1000)

        }
        else {
            let newUser = {
                name: userName.value,
                email: email.value,
                password: password.value
            }

            allUsers.push(newUser)

            localStorage.setItem("usersList", JSON.stringify(allUsers))
            setTimeout(() => {
                location = ("login.html")
                form.reset()


            }, 1000)

        }
    }

})

// signIn.addEventListener("click", () => {
//     form.reset()
// })