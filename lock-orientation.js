document.addEventListener("DOMContentLoaded", function () {
    // Verifica si la PWA está en modo standalone
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isPWA) {
        // Intenta bloquear la rotación con screen.orientation.lock (solo en Android)
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("portrait").catch(err => console.warn("No se pudo bloquear la orientación:", err));
        }

        // Solución alternativa para iPhone usando CSS
        document.documentElement.style.setProperty("overflow", "hidden");
        document.documentElement.style.setProperty("position", "fixed");
        document.documentElement.style.setProperty("width", "100vw");
        document.documentElement.style.setProperty("height", "100vh");
    }
});
