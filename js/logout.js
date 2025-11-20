// logout y borrado del localStorage
window.addEventListener("load", function () {
    let boton = document.querySelector(".boton_logout23")

    boton.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("email");

        document.querySelector(".saludo").style.display = "none";
        document.querySelector(".logout1").style.display="none";
        document.querySelector(".header_nav").style.display="flex";

    }
    )})