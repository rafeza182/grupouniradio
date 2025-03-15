document.addEventListener("DOMContentLoaded", function () {
    // Cargar el menú desde menu.html
    fetch("/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Resaltar la página activa
            const currentPath = window.location.pathname;
            document.querySelectorAll(".menu-item").forEach(link => {
                if (link.getAttribute("href") === currentPath) {
                    link.classList.add("active");
                }
            });
        });
});
