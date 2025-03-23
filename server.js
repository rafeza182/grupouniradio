import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para obtener videos de TikTok
app.get('/api/videos', async (req, res) => {
    try {
        const response = await axios.get('https://open.tiktokapis.com/v2/video/list/', {
            headers: {
                'Client-Key': process.env.CLIENT_KEY,
                'Client-Secret': process.env.CLIENT_SECRET,
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los videos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
