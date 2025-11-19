// codigo sidebar dinamico
let url2 = "https://dummyjson.com/products/category-list"
fetch(url2)
    .then(function(response) {
        return response.json();
    })
    .then (function (data) {
        let results = data
        let lista = document.querySelector(".categoria_sidebar");
        let template = "";


        for (let i = 0; i<results.length; i++) {
            template += `
                <li class="cat">
                   <a href="./categoria.html?category=${results[i]}" class="categorias_">${results[i]}</a>
                </li>
            `;
            }
        lista.innerHTML = template;    
    })
    .catch(function (error) {
        console.log("Error cargando categorias: " + error);
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


let parametros = new URLSearchParams(location.search);
let termino = parametros.get("search");
let titulo = document.querySelector(".titulo_busqueda");
let contenedor = document.querySelector(".contenedor_resultados");
let noResultados = document.querySelector(".no_hay_resultados");

titulo.innerText = `${termino}`;
let url = "https://dummyjson.com/products/search?q=" + termino 
fetch(url) 
    .then(function(response) {
        return response.json();
    })
    .then (function(data) {
        let results = data.products ;
        
        if (results.length == 0){
            noResultados.style.display = "block";
            contenedor.innerHTML = "";
        } else {
            noResultados.style.display = "none";
            let html = "";
            for (let i = 0; i < results.length; i++) {
                html += ` 
                    <article class="imagen">
                        <img src="${results[i].images[0]}">
                        <p>${results[i].title}</p>
                        <a href="./product.html?id=${results[i].id}" class="ver_detalle">Ver detalle</a>
                    </article>
                `;
            }
            contenedor.innerHTML = html; 
        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    }); 

    