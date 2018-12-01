const request = require('request');
var geocodeAddress = (address, callback) => {
    var encoded = encodeURIComponent(address);

    var encodedURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyAkwvX0LqSlq6mSz4t7ePDAi1kHK2yy7gk`;
    request({
        url: encodedURL,
        json: true
    }, (error, response, body) =>{
        if(error){
            callback('unable to connect to google servers');
        } else if(body.status==='ZERO_RESULTS'){
            console.log('unable to find address');
        } else if(body.status==='REQUEST_DENIED'){
           callback('request denied '+body.error_message);
        } else if(body.status==='OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};
module.exports.geocodeAddress = geocodeAddress;