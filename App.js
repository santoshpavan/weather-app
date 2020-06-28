const geoCode = require('./utils/Geocode');
const forecast = require('./utils/Forecast');

const location = process.argv[2];

if(!location){
    console.log("Please enter the location.");
} else{
    geoCode(location, (error, data) => {
        if(error){
            console.log(error);
        } else{
            console.log(data);
            //callback chaining
            forecast(-75.7088, 44.1545, (error, data) => {
                if(error){
                    console.log('Error', error);
                }else{
                    console.log('Data', data);
                }
            });
        }
    });
}