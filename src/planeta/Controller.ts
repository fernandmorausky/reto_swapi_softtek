import Service from "./Service";
import { CrearPlaneta } from "./dto/crear-planeta.dto";
import { ObtenerPlaneta } from "./dto/obtener-planeta.dto";
import { PlanetaCompletoCastellano } from "./interfaces/PlanetaCompletoCastellano";

export default class Controller {

    constructor(
        private readonly service: Service
    ) { }
    async crearPlaneta(payload: CrearPlaneta): Promise<Object> {
        return this.service.crearPlaneta(payload);
    }
    async obtenerPlaneta(payload: ObtenerPlaneta): Promise<PlanetaCompletoCastellano | Object> {
        return this.service.obtenerPlaneta(payload);
    }
}