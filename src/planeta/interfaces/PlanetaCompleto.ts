import { Pelicula } from "./Pelicula";
import { Persona } from "./Persona";

export interface PlanetaCompleto {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Persona[];
    films: Pelicula[];
    created: string;
    edited: string;
    url: string;
}
