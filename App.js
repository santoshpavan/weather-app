const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=5816838ccd45244a712117b079e1fdfd&query=37.8267,-122.4233&units=f';

request({url: url, json: true}, (error, response) => {
    if(error){ //if there is an error
        console.log("Unable to connect to WeatherStack. Please try again.");
    } else if(response.body.error){ //response is there but with an error code
        console.log("Please enter the location correctly.");
    } else{
        console.log("The temperature is: " + response.body.current.temperature + "F and it feels like " + response.body.current.feelslike + "F.");
    }
});

const la_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/20keka.json?access_token=pk.eyJ1Ijoic2FudG9zaHBhdmFuIiwiYSI6ImNrYnpnajJybzExdXMyc3BrMDEwanBzaTkifQ.FYOhPvoQR8DV9xtgrhhppw&limit=1';

request({url: la_url, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to Mapbox. Please try again.");
    } else if(response.body.features.length === 0){
        console.log("Please enter a valid location.");
    } else{     
        const coods = response.body.features;
        //it's in the form of longitude, latitude
        console.log("The place's co-ods are: " + JSON.stringify(response.body.features[0].center));
    }
})