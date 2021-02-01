# API Reto Técnico</br>
## Enpoints expuestos:</br>
###   POST - .../dev/sw</br>
  
  Graba por post el objeto JSON Pelicula con la siguiente estructura</br>
  
  ```JSON
  {
    "title": "The Empire Strikes Back", 
    "episode_id": 5, 
    "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....", 
    "director": "Irvin Kershner", 
    "producer": "Gary Kurtz, Rick McCallum", 
    "release_date": "1980-05-17", 
    "characters": [
        "https://swapi.py4e.com/api/people/1/", 
        "https://swapi.py4e.com/api/people/2/", 
        "https://swapi.py4e.com/api/people/3/", 
        "https://swapi.py4e.com/api/people/4/", 
        "https://swapi.py4e.com/api/people/5/", 
        "https://swapi.py4e.com/api/people/10/", 
        "https://swapi.py4e.com/api/people/13/", 
        "https://swapi.py4e.com/api/people/14/", 
        "https://swapi.py4e.com/api/people/18/", 
        "https://swapi.py4e.com/api/people/20/", 
        "https://swapi.py4e.com/api/people/21/", 
        "https://swapi.py4e.com/api/people/22/", 
        "https://swapi.py4e.com/api/people/23/", 
        "https://swapi.py4e.com/api/people/24/", 
        "https://swapi.py4e.com/api/people/25/", 
        "https://swapi.py4e.com/api/people/26/"
    ], 
    "planets": [
        "https://swapi.py4e.com/api/planets/4/", 
        "https://swapi.py4e.com/api/planets/5/", 
        "https://swapi.py4e.com/api/planets/6/", 
        "https://swapi.py4e.com/api/planets/27/"
    ], 
    "starships": [
        "https://swapi.py4e.com/api/starships/3/", 
        "https://swapi.py4e.com/api/starships/10/", 
        "https://swapi.py4e.com/api/starships/11/", 
        "https://swapi.py4e.com/api/starships/12/", 
        "https://swapi.py4e.com/api/starships/15/", 
        "https://swapi.py4e.com/api/starships/17/", 
        "https://swapi.py4e.com/api/starships/21/", 
        "https://swapi.py4e.com/api/starships/22/", 
        "https://swapi.py4e.com/api/starships/23/"
    ], 
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/8/", 
        "https://swapi.py4e.com/api/vehicles/14/", 
        "https://swapi.py4e.com/api/vehicles/16/", 
        "https://swapi.py4e.com/api/vehicles/18/", 
        "https://swapi.py4e.com/api/vehicles/19/", 
        "https://swapi.py4e.com/api/vehicles/20/"
    ], 
    "species": [
        "https://swapi.py4e.com/api/species/1/", 
        "https://swapi.py4e.com/api/species/2/", 
        "https://swapi.py4e.com/api/species/3/", 
        "https://swapi.py4e.com/api/species/6/", 
        "https://swapi.py4e.com/api/species/7/"
    ], 
    "created": "2014-12-12T11:26:24.656000Z", 
    "edited": "2014-12-15T13:07:53.386000Z", 
    "url": "https://swapi.py4e.com/api/films/2/"
}
 ```
  
###  GET  - .../dev/sw</br>
Lista todos los elementos en formato JSON por GET registrados en el endpoint anterior.
###  GET  - .../dev/sw/getPersonaje/{id}</br>
Obtiene el objeto personaje integrandose con el API de Starwars y cambiando sus propiedades a español
###  GET  - .../dev/sw/getNave/{id}</br>
Obtiene el objeto nave integrandose con el API de Starwars y cambiando sus propiedades a español
###  GET  - .../dev/sw/getPlaneta/{id}</br>
Obtiene el objeto planeta integrandose con el API de Starwars y cambiando sus propiedades a español
###  GET  - .../dev/sw/getPelicula/{id}</br>
Obtiene el objeto pelicula integrandose con el API de Starwars y cambiando sus propiedades a español