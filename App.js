const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=5816838ccd45244a712117b079e1fdfd&query=37.8267,-122.4233&units=f';

// request({url: url, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body);
//     console.log(response.body.current);
//     console.log("The temperature is: " + response.body.current.temperature + "F and it feels like " + response.body.current.feelslike + "F.");
// });

const la_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FudG9zaHBhdmFuIiwiYSI6ImNrYnpnajJybzExdXMyc3BrMDEwanBzaTkifQ.FYOhPvoQR8DV9xtgrhhppw&limit=1';

request({url: la_url, json: true}, (error, response) => {
    const coods = response.body.features;
    //it's in the form of longitude, latitude
    console.log("The place's co-ods are: " + JSON.stringify(response.body.features[0].center));
})