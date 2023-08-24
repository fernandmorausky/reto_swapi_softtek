import * as ObjectMapper from 'object-mapper';
export { personaMapper } from "./types/persona.mapper";
export { planetaMapper } from "./types/planeta.mapper";


export const mapData = <T>(obj, mapper): T => ObjectMapper(obj, mapper)