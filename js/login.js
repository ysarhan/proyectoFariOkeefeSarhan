let formulario= document.querySelector(".login");
let email_validacion= document.querySelector("#email");
let password =document.querySelector("#password");


formulario.addEventListener("submit", function(evento){
    if (email_validacion.value==""){
       return alert("El email es obligatorio");
    }
    else if(password.value==""){
       return alert("la contraseña es obligatoria");

    }
    else if(password.value.length<6){
        return alert("La contraseña debe tener al menos 6 caracteres")
    }else{
        localStorage.setItem("email",email_validacion)
        this.submit()
    }
})
