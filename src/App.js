const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// defining paths for express config
const public_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, '../templates/views'); //allows custom path definition
const partials_path = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);

// setup static directory to serve
app.use('/public', express.static(public_path));

// req -> request; res -> result
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application',
        description: 'This is a weather application that shows real time weather data using mapbox and weatherstack.'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        description: 'Please contact weather-app@notmadeupmail.com for any questions.'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        description: 'This dude is not me but a random dude off the internet probably named dude. I am making this as a part of a course to learn NodeJS.'
    });
})

// specific error display for path "/help/*"
app.get('/help/*', (req, res) => {
    res.send('404. This help article doesn\'t exist');
})

// general error display for any path that doesn't satisfy above ones
app.get('*', (req, res) => {
    res.send('404. This page doesn\'t exist');
})

app.listen(3000, () => {
    console.log("Server is up in localhost 3000");
});//listen to 3000 port
