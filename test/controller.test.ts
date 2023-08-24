
import PlanetaDao from '../src/planeta/dao/planeta.dao';
import Service from '../src/planeta/Service';
import Controller from '../src/planeta/Controller';
import Http from '../src/planeta/adapter/Http';
import { crearPlanetaRequest } from './data/request/crear-planeta.request';
import { crearPlanetaResponse } from './data/response/crear-planeta.response';
import { planetaMock } from './mock/planeta.mock';

let dao: PlanetaDao;
let service: Service;
let controller: Controller;

let mockSpay;
let daoMockSpay;

describe('Controller test', () => {
    beforeAll(() => {
        dao = new PlanetaDao();
        service = new Service(dao);
        controller = new Controller(service);
    })
    
    test('Crear Planeta', async () => {
    
        mockSpay = jest.spyOn<Http, any>(Http.prototype, 'get')
            .mockImplementation(() => planetaMock)
    
        daoMockSpay = jest.spyOn<PlanetaDao, any>(PlanetaDao.prototype, 'crearPlaneta')
            .mockImplementation(() => true)
    
        const result = await controller.crearPlaneta(crearPlanetaRequest);
        expect(result).toEqual(crearPlanetaResponse);
    });
    
    afterAll(() => {
        mockSpay.mockRestore();
        daoMockSpay.mockRestore();
    })
});
