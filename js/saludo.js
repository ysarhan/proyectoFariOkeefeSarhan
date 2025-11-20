// saludo al email registrado
let email_valido = localStorage.getItem("email");
let navlogout2 = document.querySelector(".logout1");
let login_and_register = document.querySelector(".header_nav");

if (email_valido) {
    navlogout2.style.display = "flex";    
    navlogout2.innerHTML+=`<h3 class= "saludo"> ¡Bienvenido/a: ${email_valido}</h3>`;
    login_and_register.style.display="none";
}
