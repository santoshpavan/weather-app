const geoCode = require('./utils/Geocode');
const forecast = require('./utils/Forecast');

const location = process.argv[2];

if(!location){
    console.log("Please enter the location.");
} else{
    //object destructuring used with default value set to empty when there's an error
    geoCode(location, (error, {location, latitude, longitude} = {}) => {
        if(error){
             return console.log(error);
        }
        console.log("The location is: ", location);
        console.log("The latitude is: ", latitude);
        console.log("The longitude is: ", longitude);
        //callback chaining
        forecast(latitude, longitude, (error, data) => {
            if(error){
                return console.log('Error', error);
            }
            console.log('Data', data);
        });
    });
}