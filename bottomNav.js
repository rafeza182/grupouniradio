document.addEventListener("DOMContentLoaded", function () {
    fetch("bottom-nav.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("bottom-nav-container").innerHTML = html;
        })
        .catch(error => console.error("Error cargando bottom-nav:", error));
});
