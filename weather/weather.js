const apiKey = "953c203335b249a67121939fa4b67ee9";
const request = require('request');
var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if (!error && response.statusCode ===200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('unable to fetch weather')
        }
    });
};
module.exports.getWeather = getWeather;
//953c203335b249a67121939fa4b67ee9
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
