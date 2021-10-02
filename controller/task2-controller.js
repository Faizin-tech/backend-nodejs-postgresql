require('dotenv').config();
const fetch = require('node-fetch');
const LogURL = require('../model').logSeacrh;

const {
    APIKEY
} = process.env 

const task2ListSearchMovie = async (req, res) => {
    const   endPoint = `http://www.omdbapi.com/?i=tt3896198&apikey=${APIKEY}`,
            {keywords, page} = req.query,
            
            // fetch data from OMDb
            listMovie = await fetch(`${endPoint}&s=${keywords}&page=${page || 1}`,{method: 'GET'})
                .then(res => res.json())
                .catch(e => {
                    console.error({
                        'messsage': "Upss, somethings wrong with connections",
                        error: e
                    });
                }),
            
            // Save log searching
            saveLog = await LogURL.create({UrlEndPoint: endPoint,Parameter: keywords})

    if (Promise.all([listMovie, saveLog])) 
    return res.status(200).send({
        listMovie
    })
};

module.exports = {
    task2ListSearchMovie
}