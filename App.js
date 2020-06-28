const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=5816838ccd45244a712117b079e1fdfd&query=37.8267,-122.4233&units=f';

request({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body);
    console.log(response.body.current);
    console.log("The temperature is: " + response.body.current.temperature + "F and it feels like " + response.body.current.feelslike + "F.");
});