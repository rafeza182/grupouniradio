document.addEventListener("DOMContentLoaded", function () {
    // Verifica si está en modo PWA (Standalone)
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (!isPWA) return; // ⛔ Si no es PWA, no mostrar el splash

    // Verifica si el splash ya se mostró en esta sesión
    if (sessionStorage.getItem("splashShown")) return;

    // Marca que el splash ya se mostró
    sessionStorage.setItem("splashShown", "true");

    // Guardamos el color original del fondo
    const originalBackgroundColor = document.body.style.backgroundColor || "#222222";

    // Cambiamos temporalmente el fondo a blanco
    document.body.style.backgroundColor = "#ffffff";

    // Crear el splash screen
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
        hideSplash(originalBackgroundColor);
    };

    // Opción 2: Imagen Splash (Si el video falla)
    const splashImage = document.createElement("img");
    splashImage.id = "splash-image";
    splashImage.src = "icons/splash-1284x2778.png"; // Imagen de respaldo

    splashScreen.appendChild(splashVideo);
    splashScreen.appendChild(splashImage);
    document.body.appendChild(splashScreen);

    // Ocultar el splash después de 5 segundos si el video no se cierra solo
    setTimeout(() => hideSplash(originalBackgroundColor), 5000);
});

function hideSplash(originalBackgroundColor) {
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.remove();
            // Restauramos el fondo original
            document.body.style.backgroundColor = originalBackgroundColor;
        }, 500);
    }
}
