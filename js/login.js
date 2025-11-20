// validación del login y guardado en el local Storage
let formulario= document.querySelector(".login");
let email_validacion= document.querySelector("#email");
let password =document.querySelector("#password");


formulario.addEventListener("submit", function(evento){
    if (email_validacion.value==""){
        evento.preventDefault()
       return alert("El email es obligatorio");
    }
    else if(password.value==""){
        evento.preventDefault()
       return alert("la contraseña es obligatoria");

    }
    else if(password.value.length<6){
        evento.preventDefault()
        return alert("La contraseña debe tener al menos 6 caracteres")
    }else{
        localStorage.setItem("email",email_validacion.value)
    }
})
