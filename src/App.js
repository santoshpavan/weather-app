const express = require('express');
const path = require('path');

console.log(__dirname);

const public_path = path.join(__dirname, "../public");

const app = express();

app.set('view engine', 'hbs');
app.use('/public', express.static(public_path));

// req -> request; res -> result
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application',
        description: 'This is a weather application that shows real time weather data using mapbox and weatherstack.'
    });
})

// app.get('/help', (req, res) => {
//     res.send("<h1>Help</h1>");
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>About</h1>");
// })

app.get('/weather', (req, res) => {
    res.send({
        location: "Keka",
        longitude: 10,
        latitude: 20
    });
})

app.listen(3000, () => {
    console.log("Server is up in localhost 3000");
});//listen to 3000 port
