

let links = document.querySelectorAll(".links");
let user = document.querySelectorAll(".user");
let logoutBtn = document.querySelectorAll(".logout");
let userInfo = document.querySelectorAll(".userInfo");
let loggedUser = localStorage.getItem("userName");

if (loggedUser) {

    // إخفاء links
    links.forEach(link => {
        link.style.display = "none";
    });

    // إظهار userInfo
    userInfo.forEach(el => {
        el.style.display = "block";
    });

    // كتابة اسم المستخدم
    user.forEach(el => {
        el.innerHTML = `<i class="fa-regular fa-user"></i> Hello ${loggedUser}`;
    });

    // logout
    logoutBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            localStorage.removeItem("userName");

            setTimeout(() => {
                location.href = "login.html";
            }, 1000);
        });
    });
}