document.addEventListener("DOMContentLoaded", function () {
    // Verificar si la página se está ejecutando en una PWA o en WebView
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || navigator.userAgent.includes("wv");

    if (isPWA) {
        // Si es PWA o WebView, ocultar el menú
        document.getElementById("menu-container").style.display = "none";
        return; // Salir de la función para no cargar el menú
    }

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
