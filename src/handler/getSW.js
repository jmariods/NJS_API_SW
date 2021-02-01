/**
 * Resumen:   Handler que maneja la consulta del API Ejemplo de StarWars por GET
 * Objetivo:  Cumplir con el Requerimiento funcional
 * - Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
 * - Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
 */


'use strict'
const fetch = require('node-fetch');

module.exports.getPersonaje =async (event, context, callback) => {
    const id=event.pathParameters.id;
    const res = await fetch("https://swapi.py4e.com/api/people/"+id+"/");
    const people = await res.json();
    let statusCode=200,resp;
    
    const personaje={       
        nombre : people.name,
        altura : people.height,
        masa : people.mass,
        color_cabello : people.hair_color,
        color_ojos : people.eye_color,
        anio_nacimiento : people.birth_year,
        genero : people.gender,
        planeta_origen : people.homeworld,
        peliculas : people.films,
        especies : people.species,
        vehiculos : people.vehicles,
        naves_estelares : people.starships,
        creado : people.created,
        editado : people.edited,
        url : people.url               
     };     

    if(people.detail==="Not found"){
        statusCode=404;
        resp=JSON.stringify({"Detalle":"No encontrado"});
    }
    else{
        resp=JSON.stringify(personaje);
    }

    const response = {
        statusCode: statusCode,
        body: resp
    };
    callback(null, response);
};
module.exports.getNave =async (event, context, callback) => {
    const id=event.pathParameters.id;
    const res = await fetch("https://swapi.py4e.com/api/starships/"+id+"/");
    const starship = await res.json();
    let statusCode=200,resp;
    
    const nave={ 
        nombre : starship.name,
        modelo : starship.model,
        fabricante : starship.manufacturer,
        costo_en_credito : starship.cost_in_credits,
        longitud : starship.length,
        velocidad_max_atmosferica : starship.max_atmosphering_speed,
        tripulacion: starship.crew,
        pasajeros : starship.passengers,
        capacidad_carga : starship.cargo_capacity,
        consumibles : starship.consumables,
        calificacion_hipervelocidad : starship.hyperdrive_rating,
        distancia_megaluz : starship.MGLT,
        clase_nave_estelar : starship.starship_class,
        pilotos : starship.pilots,
        peliculas : starship.films,
        creado : starship.created,
        editado : starship.edited,
        url : starship.url
    };
    if(starship.detail==="Not found"){
        statusCode=404;
        resp=JSON.stringify({"Detalle":"No encontrado"});
    }
    else{
        resp=JSON.stringify(nave);
    }
    const response = {
        statusCode: statusCode,
        body: resp
    };
    callback(null, response);   
};
module.exports.getPlaneta =async (event, context, callback) => {
    const id=event.pathParameters.id;
    const res = await fetch("https://swapi.py4e.com/api/planets/"+id+"/");
    const planet = await res.json();
    let statusCode=200,resp;
    const planeta={ 
       nombre : planet.name,
       periodo_rotacion : planet.rotation_period,
       periodo_orbital : planet.orbital_period, 
       diametro : planet.diameter,
       gravedad : planet.gravity,
       terreno : planet.terrain,
       superficie_agua : planet.surface_water,
       poblacion : planet.population,
       residentes : planet.residents,
       peliculas : planet.films,
       creado : planet.created,
       editado : planet.edited,
       url : planet.url
    };
    if(planet.detail==="Not found"){
        statusCode=404;
        resp=JSON.stringify({"Detalle":"No encontrado"});
    }
    else{
        resp=JSON.stringify(planeta);
    }
    const response = {
        statusCode: statusCode,
        body: resp
    };

    callback(null, response);   
};
module.exports.getPelicula =async (event, context, callback) => {
    const id=event.pathParameters.id;
    const res = await fetch("https://swapi.py4e.com/api/films/"+id+"/");
    const film = await res.json();
    let statusCode=200,resp;
    const pelicula={ 
        titulo : film.title,
        episodio_id : film.episode_id,
        rastreo_apertura : film.opening_crawl,
        director : film.director,
        productor : film.producer,
        fecha_lanzamiento : film.release_date,
        personajes : film.characters,   
        planetas : film.planets,
        naves_estelares : film.starships,
        vehiculos : film.vehicles,
        especies : film.species,
        creado : film.created,
        editado : film.edited,
        url : film.url 
    };
    if(film.detail==="Not found"){
        statusCode=404;
        resp=JSON.stringify({"Detalle":"No encontrado"});
    }
    else{
        resp=JSON.stringify(pelicula);
    }
    const response = {
        statusCode: statusCode,
        body: resp
    };

    callback(null, response);   
};

