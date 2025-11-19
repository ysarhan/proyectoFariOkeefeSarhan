
let ident = location.search;
let identObj = new URLSearchParams(ident);
let id = identObj.get("id");

let url = `https://dummyjson.com/recipes/${id}`
fetch(url)
.then(function(res)) {
    return res.json();
}
.then(function(data)) {

}
.catch(function (error) {
    console.log("Error: " + error);
})

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