require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get("/videos", async (req, res) => {
    try {
        const cuenta = req.query.cuenta || "diariosport";
        const url = `https://api.tiktok.com/video/list?account=${cuenta}&client_key=${CLIENT_KEY}&client_secret=${CLIENT_SECRET}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener videos de TikTok" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
