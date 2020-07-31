const request = require("request")

const forecast = (latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=102cc8f62b97db209629a331a1309c96&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather',undefined)
        }else if (body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,'It is '+ body.current.weather_descriptions[0]+', The Tempreture is '+body.current.temperature + ' degress out and there is a ' + body.current.precip + '% chance of rain.') 
        }
    })
}
module.exports = forecast