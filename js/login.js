let formulario = document.querySelector(".login");
let email_validacion = document.querySelector("#email");
let password = document.querySelector("#password");


formulario.addEventListener("submit", function (e){
    if (email_validacion.value === "") {
        e.preventDefault();
        alert("El email es obligatorio");

    }
    else if(password.value===""){
        e.preventDefault();
        alert("La contraseña es obligatoria");

    }
    else if(password.value.length<6){
        e.preventDefault();
        alert("La contraseña debe tener al menos 6 caracteres");

    }
})
