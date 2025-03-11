document.addEventListener("DOMContentLoaded", function () {
    // Verifica si está en modo PWA (Standalone)
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (!isPWA) return; // ⛔ Si no es PWA, no mostrar el splash

    // Verifica si el splash ya se mostró en esta sesión
    if (sessionStorage.getItem("splashShown")) return;

    // Marca que el splash ya se mostró
    sessionStorage.setItem("splashShown", "true");

    const splashScreen = document.createElement("div");
    splashScreen.id = "splash-screen";

    // Opción 1: Video Splash
    const splashVideo = document.createElement("video");
    splashVideo.id = "splash-video";
    splashVideo.src = "splash/video-splash.mp4"; // Ruta del video
    splashVideo.autoplay = true;
    splashVideo.muted = true;
    splashVideo.playsInline = true;
    splashVideo.onended = function () {
        hideSplash();
    };

    // Opción 2: Imagen Splash (Si el video falla)
    const splashImage = document.createElement("img");
    splashImage.id = "splash-image";
    splashImage.src = "icons/splash-1284x2778.png"; // Imagen de respaldo

    splashScreen.appendChild(splashVideo);
    splashScreen.appendChild(splashImage);
    document.body.appendChild(splashScreen);

    setTimeout(hideSplash, 5000); // Oculta el splash en 5s si el video no cierra solo

      const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (!isPWA) return; // ⛔ Si no es PWA, no mostrar el splash

    // Guardamos el color original del theme
    const originalThemeColor = document.querySelector('meta[name="theme-color"]')?.getAttribute("content") || "#222222";

    // Cambiamos temporalmente a blanco
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");

    // Restauramos el color original después del splash
    setTimeout(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", originalThemeColor);
    }, 5000); // 5 segundos
    
});

function hideSplash() {
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
        splashScreen.style.opacity = "0";
        setTimeout(() => splashScreen.remove(), 500);
    }
}
