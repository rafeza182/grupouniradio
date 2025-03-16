document.addEventListener("DOMContentLoaded", function () {
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isPWA) {
        // Intentar bloquear orientación en Android
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("portrait").catch(err => console.warn("No se pudo bloquear la orientación:", err));
        }

        // Detectar iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        // Si es iOS, bloquear orientación con CSS
        if (isIOS) {
            window.addEventListener("orientationchange", function () {
                if (window.innerHeight < window.innerWidth) {
                    document.body.classList.add("force-portrait");
                    document.querySelector(".force-portrait-message").style.display = "block";
                } else {
                    document.body.classList.remove("force-portrait");
                    document.querySelector(".force-portrait-message").style.display = "none";
                }
            });

            // Forzar inicio en modo vertical
            if (window.innerHeight < window.innerWidth) {
                document.body.classList.add("force-portrait");
                document.querySelector(".force-portrait-message").style.display = "block";
            }
        }
    }
});
