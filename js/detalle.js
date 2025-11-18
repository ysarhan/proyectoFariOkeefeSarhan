
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