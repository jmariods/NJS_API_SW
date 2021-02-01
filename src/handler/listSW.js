/**
 * Resumen:   Handler que maneja la obtención de DynamoDB de los registros de Peliculas de Star Wars que han sido registrados con GET 
 *            desde el endpoint createSW
 * Objetivo:  Cumplir con el Requerimiento funcional: Crear un endpoint GET que muestre la data almacenada.
 */

'use strict'
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.listSW = (event, context, callback) => {    
    
    const params = {
        TableName: 'PeliculasSW'
    };
        
    dynamoDb.scan(params, (error, data) => {
        if(error) {
            console.error(error);
            callback(new Error(error));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };

        callback(null, response);
    });
}