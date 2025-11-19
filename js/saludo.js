let email_valido = localStorage.getItem("email");
let nav = document.querySelector(".header_nav");
let login_and_register = document.querySelectorAll(".login_register");


if (email_valido) {
    nav.innerHTML =
        `
        <h3 class= "usuario saludo"> ¡Bienvenido/a: ${email_valido}!</h3>
        <nav class="header_nav navlogout">
            <ul>
                <li><a href="./index.html" class="login_register" >Home </a></li>
                <li><a class="login_register"> Logout</a></li>
            </ul>
        </nav>`

}