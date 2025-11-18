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
                   <a href="./category.html?category=${results[i]}" class="categorias_">
                        ${results[i]}
                </li>
            `;
            }
        lista.innerHTML = template;    
    })
    .catch(function (error) {
        console.log("Error cargando categorias: " + error);
    })





let url = "https://dummyjson.com/products/categories"
let categoria = parametros.get("cat"); 
let titulo = document.querySelector("h2");
titulo.textContent = "Categoria | " + categoria; 

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let results = data.products;
        let info = document.querySelector(".categoria_pintura")
        let productos = "";
        for (let i = 0; i < results.length; i++) {
            productos += `
                <article class = "imagen">
                    <img src= ${results[i].images}></img>
                    <p><a href="./product.html?id=${results[i].id}" class="ver_detalle">Ver detalle</a></p>
                </article>
            `
        }
        info.innerHTML = productos
    })
    .catch (function(erorr) {
        console.log ("error:" + error)
    })

