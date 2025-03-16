document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-item");
    const navLinks = document.querySelectorAll(".nav-item");
    const contentContainer = document.getElementById("content-container");

    function loadPage(page) {
        fetch(`/${page}.html`)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
                history.pushState({}, "", page === "index" ? "/" : `/${page}`);
            })
            .catch(error => console.error("Error cargando la página:", error));
    }

    // Evitar recargar la página al hacer clic en el menú superior
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Evitar recargar la página al hacer clic en la barra de navegación inferior
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Manejar la navegación con los botones de "atrás" y "adelante" del navegador
    window.addEventListener("popstate", function () {
        const page = window.location.pathname.replace("/", "") || "index";
        loadPage(page);
    });

    // Cargar la página inicial SIN que agregue /index a la URL
    const initialPage = window.location.pathname === "/" ? "index" : window.location.pathname.replace("/", "");
    loadPage(initialPage);
});
