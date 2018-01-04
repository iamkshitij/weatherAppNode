const request = require('request');
const argv = require('yargs').argv;
let apiKey = "32421e9456c3de089132549f267298e5";
let city = argv.c || 'delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url,function(err,res,body){
    if(err)
        console.log('error',error);
    else{
        let weather = JSON.parse(body);
        let msg = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(msg); 
    }
           
});