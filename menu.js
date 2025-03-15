document.addEventListener("DOMContentLoaded", function () {
    // Cargar el menú desde menu.html
    fetch("/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            const currentPath = window.location.pathname;
            const menuLinks = document.querySelectorAll(".menu-item");

            menuLinks.forEach(link => {
                if (link.getAttribute("href") === currentPath) {
                    link.classList.add("active");
                }
            });

            // Cambiar color de texto según la página
            const isIndex = currentPath === "/" || currentPath === "/index.html";
            if (!isIndex) {
                document.querySelector(".menu").classList.add("dark-menu");
            }
        });
});
