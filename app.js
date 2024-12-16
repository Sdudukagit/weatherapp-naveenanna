const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Replace with your OpenWeatherMap API key
const API_KEY = 'your_openweathermap_api_key';

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city || 'London'; // Default city
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        res.send({
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
        });
    } catch (error) {
        res.status(500).send({ error: 'Unable to fetch weather data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Weather app running at http://localhost:${port}`);
});
