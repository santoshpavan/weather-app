const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5816838ccd45244a712117b079e1fdfd&query=' + lat + "," + long + '&units=f';
    request({url, json: true}, (error, {body}) => {
        if(error){ //if there is an error
            callback("Unable to connect to WeatherStack. Please try again.")
        } else if(body.error){ //response is there but with an error code
            callback("Please enter the location correctly.");
        } else{
            callback(undefined, "The temperature is: " + body.current.temperature + "F and it feels like " + body.current.feelslike + "F.");
        }
    })
}

module.exports = forecast;