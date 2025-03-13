document.addEventListener("DOMContentLoaded", function () {
    // Verifica si está en modo PWA (Standalone)
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    // Detectar si es iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Si no es PWA o no es iOS, no mostrar el splash (En Android se usará el de Bubblewrap)
    if (!isPWA || !isIOS) return;

    // Verifica si el splash ya se mostró en esta sesión
    if (sessionStorage.getItem("splashShown")) return;

    // Marca que el splash ya se mostró
    sessionStorage.setItem("splashShown", "true");

    // Guardamos el color original del theme
    const themeMetaTag = document.querySelector('meta[name="theme-color"]');
    const originalThemeColor = themeMetaTag ? themeMetaTag.getAttribute("content") : "#222222";

    // Cambiamos temporalmente a blanco
    if (themeMetaTag) themeMetaTag.setAttribute("content", "#ffffff");

    // Crear el splash screen
    const splashScreen = document.createElement("div");
    splashScreen.id = "splash-screen";

    // Opción 1: Video Splash (Solo en iOS)
    const splashVideo = document.createElement("video");
    splashVideo.id = "splash-video";
    splashVideo.src = "splash/video-splash.mp4"; // Ruta del video
    splashVideo.autoplay = true;
    splashVideo.muted = true;
    splashVideo.playsInline = true;
    splashVideo.onended = function () {
        hideSplash(originalThemeColor);
    };

    // Opción 2: Imagen Splash (Si el video falla)
    const splashImage = document.createElement("img");
    splashImage.id = "splash-image";
    splashImage.src = "icons/splash-1284x2778.png"; // Imagen de respaldo

    splashScreen.appendChild(splashVideo);
    splashScreen.appendChild(splashImage);
    document.body.appendChild(splashScreen);

    // Ocultar el splash después de 5 segundos si el video no se cierra solo
    setTimeout(() => hideSplash(originalThemeColor), 3000);
});

function hideSplash(originalThemeColor) {
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.remove();
            // Restauramos el color original del theme
            document.querySelector('meta[name="theme-color"]').setAttribute("content", originalThemeColor);
        }, 300);
    }
}
