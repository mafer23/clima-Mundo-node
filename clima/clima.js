const axios = require('axios');
const lugar = require('../lugar/lugar');


const getClima = async (lat , lng) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=58dc07170846b64fecbc9d0283bd0161
    `);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}