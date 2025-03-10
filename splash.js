document.addEventListener("DOMContentLoaded", function () {
    // Verifica si está en modo PWA (Standalone)
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (!isPWA) return; // ⛔ Si no es PWA, no mostrar el splash

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
});

function hideSplash() {
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
        splashScreen.style.opacity = "0";
        setTimeout(() => splashScreen.remove(), 500);
    }
}
