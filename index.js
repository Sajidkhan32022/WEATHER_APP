const request = require('request');
const geocode = require('./utils/geocode')

//let url = 'http://api.weatherstack.com/current?access_key=4ddf3325b5246dd35ce408475571ba61&query=New%20York'
/*request({url,json:true},(error, response, body) =>{
  //console.error('error:', error); // Print the error if one occurred
 //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 // console.log('body:', {body}); // Print the HTML for the Google homepage.
 // console.log(JSON.parse(body))
 console.log(response.body. current)

});*/
// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f'

// request({ url: url, json: true }, (error, response) => {
//   if(error){
//     console.log('unable to connect to server')
//   }else if(response.body.error){
//     console.log('unable to find location')
//   }
//   else {
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//   }
// })


/*const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FqaWRraGFuMzIwMjIiLCJhIjoiY2w3a2k1Nm1xMGFwMzNucDNtNnc5NGMxMCJ9.yA-BcgHUhaPDIp6blhCDBw"

request({url: geoUrl, json: true}), (error, response)=>{
  const latitude = response.body.features[0].center[0]
  const longitude =  response.body.features[0].center[1]
  console.log(latitude)
  console.log(response)
}*/
const address = process.argv[2]
console.log(process.argv)
geocode(address, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})