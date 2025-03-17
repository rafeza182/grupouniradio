document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-item, .nav-item");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pageUrl = this.getAttribute("href");
            document.getElementById("content-frame").src = pageUrl;
            history.pushState({}, "", pageUrl);
        });
    });

    window.addEventListener("popstate", function () {
        document.getElementById("content-frame").src = window.location.pathname;
    });
});
