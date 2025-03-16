document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-item");
    const navLinks = document.querySelectorAll(".nav-item"); // Ahora detecta la bottom-nav también
    const contentContainer = document.getElementById("content-container");

    function loadPage(page) {
        fetch(`/${page}.html`)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
                window.history.pushState({}, "", `/${page}`);
            })
            .catch(error => console.error("Error cargando la página:", error));
    }

    // Manejo de clics en el menú superior
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Manejo de clics en la barra de navegación inferior (bottom-nav)
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Cargar la página inicial basada en la URL actual
    const initialPage = window.location.pathname.replace("/", "") || "index";
    loadPage(initialPage);
});
