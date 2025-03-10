document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.createElement("div");
    splashScreen.id = "splash-screen";

    // Opción 1: Video Splash
    const splashVideo = document.createElement("video");
    splashVideo.id = "splash-video";
    splashVideo.src = "splash/video-splash.mp4"; // ✅ Ruta corregida
    splashVideo.autoplay = true;
    splashVideo.muted = true;
    splashVideo.playsInline = true; // Para compatibilidad con iOS
    splashVideo.onended = function () {
        hideSplash();
    };

    // Opción 2: Imagen Splash (Si el video falla)
    const splashImage = document.createElement("img");
    splashImage.id = "splash-image";
    splashImage.src = "icons/splash-1284x2778.png"; // Imagen estática como backup

    // Agregar Video o Imagen al Splash
    splashScreen.appendChild(splashVideo);
    splashScreen.appendChild(splashImage);
    document.body.appendChild(splashScreen);

    // Ocultar splash después de 5 segundos si el video no cierra solo
    setTimeout(hideSplash, 5000);
});

function hideSplash() {
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
        splashScreen.style.opacity = "0";
        setTimeout(() => splashScreen.remove(), 500);
    }
}
