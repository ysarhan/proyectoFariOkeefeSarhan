
let ident = location.search;
let identObj = new URLSearchParams(ident);
let id = identObj.get("id");

let url = `https://dummyjson.com/products/${id}`
fetch(url)
.then(function(res) {
    return res.json();
})

.then(function(data){

    let contenedor = document.querySelector(".section1_producto");
    let contenedor2=document.querySelector(".section2_producto");
    contenedor.innerHTML=` <img src="${data.thumbnail}" class="marcadores_img">`
    contenedor2.innerHTML = `
    <div class="texto_producto">
        <h1 class="product_h1">${data.title}</h1>
        <h2 class="product_h2">Marca: ${data.brand}</h2>
        <p class="product_h3">Precio: ${data.price}</p>
        <p class="description">${data.description}</p>

        <p class="categoria">
        Categoría: 
        <a href="./categoria.html?category=${data.category}">
            ${data.category}
        </a>
        </p>

        <p class="unidades">Stock: ${data.stock}</p>
    </div>
        
        `
    let contenedor3= document.querySelector(".section_reviews")
    let cont="";

    for (let i= 0; i < data.reviews.length; i++) {
                    cont+=`
                    <div class="review">
                        <h4 class="rating">Rating: ${data.reviews[i].rating}</h4>
                        <p class="review_texto">${data.reviews[i].comment}</p>
                        <div class="datos_review">
                            <p class="nombre_review">Usuario: ${data.reviews[i].reviewerName}</p>
                            <p class="nombre_review">Email:${data.reviews[i].reviewerEmail}</p>
                            <p class="fecha">Fecha: ${data.reviews[i].date}</p>
                        </div>
                    </div>
    `};

    contenedor3.innerHTML = cont;
            
})
            
.catch(function (error) {
    console.log("Error: " + error);
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