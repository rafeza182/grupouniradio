document.addEventListener("DOMContentLoaded", function () {
    // Verifica si la PWA está en modo standalone
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isPWA && screen.orientation && screen.orientation.lock) {
        // Intenta bloquear la rotación a vertical
        screen.orientation.lock("portrait").catch(err => console.warn("No se pudo bloquear la orientación:", err));
    }
});
