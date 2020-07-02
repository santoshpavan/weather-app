const express = require('express');
const path = require('path');
const hbs = require('hbs');

const geoCode = require('./utils/Geocode');
const forecast = require('./utils/Forecast');

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

app.get('/weather', (req, res) => {
    const location = req.query.address;
    if(!location){
        res.render('404',{
            title: 'Error',
            error_description: 'Invalid address'
        });
    }
    else{
        //object destructuring used with default value set to empty when there's an error
        geoCode(location, (error, {location, latitude, longitude} = {}) => {
            if(error){
                // return console.log(error);
                return res.render('404',{
                    title: 'Error',
                    error_description: error
                });
            }
            // console.log("The location is: ", location);
            // console.log("The latitude is: ", latitude);
            // console.log("The longitude is: ", longitude);
            //callback chaining
            forecast(latitude, longitude, (error, data) => {
                if(error){
                    // return console.log('Error', error);
                    return res.render('404',{
                        title: 'Error',
                        error_description: error
                    });
                }
                // console.log('Data', data);
                res.send({
                    data: data
                });
            });
        });
    }
})

// specific error display for path "/help/*"
app.get('/help/*', (req, res) => {
    res.render('404',{
        title: 'Error',
        error_description: '404. Help article not found.'
    })
})

// general error display for any path that doesn't satisfy above ones
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error',
        error_description: '404. Page not found.'
    })
})

app.listen(3000, () => {
    console.log("Server is up in localhost 3000");
});//listen to 3000 port
