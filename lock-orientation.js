document.addEventListener("DOMContentLoaded", function () {
    // Verifica si la PWA está en modo standalone
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isPWA) {
        // Intenta bloquear la rotación con screen.orientation.lock (Funciona en Android, no en iOS)
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("portrait").catch(err => console.warn("No se pudo bloquear la orientación:", err));
        }

        // Detectar cambios de orientación y forzar modo vertical
        window.addEventListener("orientationchange", function () {
            if (window.innerHeight < window.innerWidth) {
                document.body.classList.add("force-portrait");
            } else {
                document.body.classList.remove("force-portrait");
            }
        });

        // Forzar a que inicie en modo vertical
        if (window.innerHeight < window.innerWidth) {
            document.body.classList.add("force-portrait");
        }
    }
});
