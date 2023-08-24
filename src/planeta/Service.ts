import Http from "./adapter/Http";
import CrearPlanetaDao from "./dao/planeta.dao";
import { Planeta } from "./interfaces/Planeta";
import { CrearPlaneta } from "./dto/crear-planeta.dto";
import { ObtenerPlaneta } from "./dto/obtener-planeta.dto";
import { Pelicula } from "./interfaces/Pelicula";
import { Persona } from "./interfaces/Persona";
import { PlanetaCompleto } from "./interfaces/PlanetaCompleto";
import { mapData, planetaMapper } from "./mapper";
import { PlanetaCompletoCastellano } from "./interfaces/PlanetaCompletoCastellano";

export default class Service {
    constructor(
        private readonly crearPlanetaDao: CrearPlanetaDao,
        private readonly http = new Http()
    ) { }

    async crearPlaneta(payload: CrearPlaneta): Promise<Object> {
        const { idPlaneta } = payload;
        const planeta = await this.http.get<Planeta>(`${process.env.HOST_SWAPI}/planets/${idPlaneta}/`);
        if (!planeta) {
            throw new Error("Planeta no encontrado!!!");
        }
        const peliculasPromesas = planeta.films.map(peliculaUrl => this.http.get<Pelicula>(peliculaUrl))
        const personasPromesas = planeta.residents.map(personaUrl => this.http.get<Persona>(personaUrl))

        const resultadoFinalPromesas: [Promise<Pelicula[]>, Promise<Persona[]>] = [
            Promise.all<Promise<Pelicula>[]>(peliculasPromesas),
            Promise.all<Promise<Persona>[]>(personasPromesas)
        ];
        const [peliculas, personas]: [Pelicula[], Persona[]] = await Promise.all(resultadoFinalPromesas);

        const planetaCompleto: PlanetaCompleto = {
            ...planeta,
            films: peliculas,
            residents: personas
        }
        const resultadoFinal = mapData<PlanetaCompletoCastellano>(planetaCompleto, planetaMapper)
        if (await this.crearPlanetaDao.crearPlaneta(resultadoFinal)) {
            return {
                mensaje: 'creado correctamente!',
                planetaCreado: resultadoFinal.nombre,
                OK: true
            };
        }
        return {
            mensaje: 'Error de inserción!',
            OK: false
        };
    }
    async obtenerPlaneta(payload: ObtenerPlaneta): Promise<PlanetaCompletoCastellano | object> {
        const { nombrePlaneta } = payload;
        const result = await this.crearPlanetaDao.obtenerPlaneta(nombrePlaneta);
        if (!result) {
            return {
                mensaje: 'Error al Obtener Información!',
                OK: false
            };
        }
        return result;
    }
}