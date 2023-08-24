import { mapData, personaMapper } from "..";
import { peliculaMapper } from "./pelicula.mapper";

export const planetaMapper = {
    name: 'nombre',
    rotation_period: 'periodo_rotacion',
    orbital_period: 'periodo_orbita',
    diameter: 'diametro',
    climate: 'clima',
    gravity: 'gravedad',
    terrain: 'terreno',
    surface_water: 'indicador_agua',
    population: 'poblacion',
    residents: [{
        key: 'habitantes',
        transform: (habitantes) => habitantes.map((habitante) => mapData(habitante, personaMapper))
    }],
    films: [{
        key: 'pelicilas',
        transform: (peliculas) => peliculas.map((pelicula) => mapData(pelicula, peliculaMapper))
    }],
    created: 'fecha_creacion',
    edited: 'fecha_edicion',
    url: 'url',
}
