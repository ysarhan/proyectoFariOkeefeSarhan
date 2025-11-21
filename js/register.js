// codigo barra busqueda
let formulario = document.querySelector(".barra_busqueda");
let inputBusqueda = document.querySelector("#busqueda");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (inputBusqueda.value == "") {
        alert("El campo de busqueda no puede estar vacio")
    } 
    if (inputBusqueda.value.length < 3) {
         alert("La busqueda debe tener al menos 3 caracteres")
    }
    else {
         this.submit()
    } 
})

let form= document.querySelector(".register_section");
let mail= document.querySelector("#mail");
let passw =document.querySelector("#pass");
let passw_repetir=document.querySelector("#pass2")
form.addEventListener("submit", function(evento){
if (mail.value===""){
evento.preventDefault()
return alert("El mail es obligatorio");
}
else if(pass.value===""){
evento.preventDefault()
return alert("la password es obligatoria");
}
else if(pass.value.length<6){
evento.preventDefault()
return alert(`La contraseña debe tener al menos 6
caracteres`)
} else if(passw.value !=passw_repetir.value){
evento.preventDefault()
return alert("Las contraseñas no coinciden")
}
else{
localStorage.setItem("email",email_validacion.value)
window.location.href ="./login.html"
}
})