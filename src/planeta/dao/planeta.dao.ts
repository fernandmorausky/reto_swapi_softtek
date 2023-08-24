import DynamoDbAdapter from "../adapter/dynamodb";
import { PlanetaCompleto } from "../interfaces/PlanetaCompleto";
import { PlanetaCompletoCastellano } from "../interfaces/PlanetaCompletoCastellano";

export default class PlanetaDao {
    constructor(
        private readonly client = new DynamoDbAdapter()
    ) {}
    async crearPlaneta(planeta: PlanetaCompletoCastellano): Promise<Boolean> {
      try {
        const putParams = {
            TableName: process.env.TABLA_DYN_PLANETA || 'TABLA_DYN_TEMP',
            Item: planeta,
          };
          console.log('putParams', putParams);
          await this.client.insertar(putParams);
          return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    }

  async obtenerPlaneta(name): Promise<PlanetaCompletoCastellano> {
    const getParams = {
      TableName: process.env.TABLA_DYN_PLANETA || 'TABLA_DYN_TEMP',
      Key: {
        nombre: name,
      },
    };
    const planeta = await this.client.obtener(getParams);
    return planeta;
  }
}
