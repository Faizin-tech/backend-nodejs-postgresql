require('dotenv').config();
const fetch = require('node-fetch');
const LogURL = require('../model').logSeacrh;

const {
    APIKEY
} = process.env;

const apiUrl = `http://www.omdbapi.com/?apikey=${APIKEY}`;

const task2ListSearchMovie = async (req, res) => {

    const   {keywords, page} = req.query,
            endPoint = `${apiUrl}&s=${keywords}&page=${page || 1}`;
            
            try {

                        // fetch data from OMDb
                const   response = await fetch(`${endPoint}`,{method: 'GET'}),
                        listMovie = await response.json(),
                        // Save log searching
                        saveLog = await LogURL.create({UrlEndPoint: endPoint,Parameter: keywords});
                
                await Promise.all([listMovie, saveLog])
                .then(([list, res2]) => {
                    return res.status(200).send({
                        success: true,
                        list
                    })
                })
                .catch(([err1, err2]) => {
                    console.log('error nih');
                    return res.status(500).send({
                        success: false,
                        messsage: err1 || err2
                    })
                })
                
            } catch (error) {
                return res.status(500).send({
                    success: false,
                    messsage: "Upss, somethings wrong with connections",
                    error: error.message
                })
            }
            
};

const task2SearchMovieById = async (req, res) => {
    
    const   {id} = req.query,
            endPoint = `${apiUrl}&i=${id}`;

            try {

                        // fetch data from OMDb
                const   response = await fetch(`${endPoint}`,{method: 'GET'}),
                        detailMovie = await response.json(),
                        
                        // Save log searching
                        saveLog = await LogURL.create({UrlEndPoint: endPoint,Parameter: id});
    
                await Promise.all([detailMovie, saveLog])
                .then(([detail, res2]) => {
                    return res.status(200).send({
                        success: true,
                        detail
                    })
                })
                .catch(([err1, err2]) => {
                    return res.status(500).send({
                        success: false,
                        messsage: err1 || err2
                    })
                });

            } catch (error) {
                return res.status(500).send({
                    success: false,
                    messsage: "Upss, somethings wrong with connections",
                    error: error.message
                })
            }
            
};

module.exports = {
    task2ListSearchMovie,
    task2SearchMovieById
}