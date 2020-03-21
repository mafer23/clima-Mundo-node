const axios = require('axios');


const getLugarlating = async (dir) =>{
    
    const encodedURL = encodeURI(dir);


    // console.log(encodedURL);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {'X-RapidAPI-Key': 'ec3dc1b34cmshc1dec3117aaf515p158913jsncdcdc4981197'}
      });
      
    
     const resp = await instance.get();

     if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultdos para ${dir}`);
         
     }

     const data      = resp.data.Results[0];
     const direccion = data.name;
     const lat  = data.lat;
     const lng  = data.lon;


        return{
            direccion,
            lat,
            lng
        }

}

module.exports ={
    getLugarlating
};