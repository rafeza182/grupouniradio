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

            const currentPath = window.location.pathname;  // Aquí detectamos la ruta actual
            const menuLinks = document.querySelectorAll(".menu-item");

            // Comprobar si la URL actual coincide con algún enlace del menú
            menuLinks.forEach(link => {
                const linkPath = link.getAttribute("href");
                
                // Ajustamos la comparación para la página de inicio
                if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index')) {
                    link.classList.add("active");
                } else if (currentPath.includes(linkPath) && linkPath !== "/") {
                    // Comprobamos si estamos en una página diferente, pero no en la de inicio
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });

            // Cambiar color de texto según la página
            const isIndex = currentPath === "/" || currentPath === "/index.html";
            if (!isIndex) {
                document.querySelector(".menu").classList.add("dark-menu");
            }
        });
});
