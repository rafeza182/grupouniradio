// Archivo: menu.js

// Crear el menú inferior dinámico
const menu = document.createElement("div");
menu.id = "bottom-menu";
menu.innerHTML = `
    <nav>
        <button id="home-btn">🏠 Inicio</button>
        <button onclick="location.href='contacto.html'">📩 Contacto</button>
        <button onclick="location.href='nosotros.html'">ℹ️ Nosotros</button>
        <button onclick="location.href='multicolor.html'">🎨 Multicolor</button>
    </nav>
`;

document.body.appendChild(menu);

document.getElementById("home-btn").addEventListener("click", () => {
    location.href = "index.html";
});

// Estilos para el menú fijo
const style = document.createElement("style");
style.innerHTML = `
    #bottom-menu {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }
    nav button {
        color: white;
        background: transparent;
        border: none;
        font-size: 16px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.querySelector('.bottom-nav a[href="index.html"]');
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que recargue si ya está en la página
            location.reload();
        });
    }
});
