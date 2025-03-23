require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Lista de cuentas de TikTok que quieres usar
const cuentasTikTok = [
    "macariva", "benjaminzamoratv", "diariosport", "mls",
    "dailymail", "diario.ole", "revistapanenka", "concacaf",
    "latinus_us", "championsleague", "mvsnoticias", "colglobalnews",
    "elheraldohonduras", "tsihonduras"
];

// Ruta para obtener videos aleatorios
app.get("/videos", async (req, res) => {
    try {
        const cuenta = cuentasTikTok[Math.floor(Math.random() * cuentasTikTok.length)]; // Escoger una cuenta al azar
        const url = `https://api.tiktok.com/video/list?account=${cuenta}&client_key=${CLIENT_KEY}&client_secret=${CLIENT_SECRET}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener videos de TikTok" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
