const request = require('request');

const geoCode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoic2FudG9zaHBhdmFuIiwiYSI6ImNrYnpnajJybzExdXMyc3BrMDEwanBzaTkifQ.FYOhPvoQR8DV9xtgrhhppw&limit=1';

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback("Unable to connect. Please try again.");
        } else if(response.body.features.length === 0){
            callback("Please enter a valid location.");
        } else{     
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            callback(undefined, data);
        }
    })
}

module.exports = geoCode;