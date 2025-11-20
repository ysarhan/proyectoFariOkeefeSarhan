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

// código de categoria
let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let categoria = parametros.get("category"); 
let titulo = document.querySelector(".titulo_categoria");
titulo.textContent = "Categoria | " + categoria; 
let url = "https://dummyjson.com/products/category/" + categoria;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let results = data.products;
        let info = document.querySelector(".imagenes_categoria");
        let productos = "";
        for (let i = 0; i < results.length; i++) {
            productos += `
                <article class = "imagen">
                    <img src="${results[i].images[0]}"></img>
                    <p class="texto">${results[i].title}</p>
                    <p><a href="./product.html?id=${results[i].id}" class="ver_detalle">Ver detalle</a></p>
                </article>
            `;
        }
        info.innerHTML = productos;
    })
    .catch (function(error) { 
        console.log ("Error:" + error);
    });

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