const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/extract', async (req, res) => {
    try {
        const response = await axios.post(
            'https://ai.google.dev/gemini-api/document:process',
            req.body,
            {
                headers: {
                    Authorization: `Bearer YOUR_API_KEY`,
                    'Content-Type': 'application/json',
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));