document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("content-frame");
    const links = document.querySelectorAll(".menu-item, .nav-item");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            iframe.src = `/${page}/index.html`; // Carga la subpágina en el iframe
        });
    });
});
