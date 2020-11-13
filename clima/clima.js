const { require } = require("yargs");

const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=77c742a99477fca94f9a73e7a6ffcad3&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
};