let url = "https://dummyjson.com/products/category/groceries?limit=10"
fetch(url)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        let results = data.products;
        let info = document.querySelector(".nuestrosprod")
        let productos = "";

        for (let i = 0; i < results.length; i++) {
            productos += `
                <article class="imagen">
                    <img src= ${results[i].images}></img>
                    <h3> ${results[i].title}</h3>
                    <p class="texto">${results[i].description}</p>
                    <p class="precio">${results[i].price} </p>
                    <a href="./product.html?id=${results[i].id}" class="ver_detalle">Ver detalle</a>
                </article>
            `
        }
        info.innerHTML = productos
    })
    .catch(function (error) {
        console.log("Error:" + error);
    })

let url_accesorios = "https://dummyjson.com/products/category/kitchen-accessories?limit=10"
fetch(url_accesorios)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        let results = data.products;
        let info2 = document.querySelector(".vendidos")
        let vendidos = ""
        for (let i = 0; i < results.length; i++) {
            vendidos += `
                <article class="imagen">
                    <img src= ${results[i].images}></img>
                    <h3> ${results[i].title}</h3>
                    <p class="texto">${results[i].description}</p>
                    <p class="precio">${results[i].price} </p>
                    <a href="./product.html?id=${results[i].id}" class="ver_detalle">Ver detalle</a>

                </article>
            `
        }
        info2.innerHTML = vendidos
    })
    .catch(function (error) {
        console.log("Error:" + error);
    })

// codigo de sidebar dinamico
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