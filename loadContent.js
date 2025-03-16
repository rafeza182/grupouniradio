document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-item");
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

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Cargar la página inicial
    const initialPage = window.location.pathname.replace("/", "") || "index";
    loadPage(initialPage);
});
