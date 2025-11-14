let url = "https://dummyjson.com/products/category/beauty"
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
                    <p><a href="./product.html" class="ver_detalle">Ver detalle</a></p>
                </article>
            `
        }
        info.innerHTML = productos
    })
    .catch (function(erorr) {
        console.log ("error:" + error)
    })