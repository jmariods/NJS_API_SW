/**
 * Resumen:   Handler que maneja la creación en DynamoDB de los registros de Peliculas de Star Wars usando POST 
 * Objetivo:  Cumplir con el Requerimiento funcional: Crear un modelo de su elección mediante el uso de un endpoint POST, 
 *            la data se tendrá que almacenar dentro de una base de datos.
 */

'use strict'

const AWS = require('aws-sdk');
const SEED="081286MJODS";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.createSW = (event, context, callback) => {
    
    const datetime = new Date().toISOString();
    const pelicula = JSON.parse(event.body);

    const params = {
        TableName: 'PeliculasSW',
        Item: {
            id: SEED + Math.floor(Date.now()),
            titulo : pelicula.title,
            episodio_id : pelicula.episode_id,
            rastreo_apertura : pelicula.opening_crawl,
            director : pelicula.director,
            productor : pelicula.producer,
            fecha_lanzamiento : pelicula.release_date,
            personajes : pelicula.characters,   
            planetas : pelicula.planets,
            naves_estelares : pelicula.starships,
            vehiculos : pelicula.vehicles,
            especies : pelicula.species,
            creado : datetime,
            editado : datetime,
            url : pelicula.url 
        }
    };
        
    dynamoDb.put(params, (error, pelicula) => {
        if(error) {
            console.error(error);
            callback(new Error(error));
            return;
        }

        const response = {
            statusCode: 201,
            body: JSON.stringify(pelicula.Item)
        };

        callback(null, response);
    });
}