import Controller from "./src/planeta/Controller";
import Service from "./src/planeta/Service";
import PlanetaDao from "./src/planeta/dao/planeta.dao";

const dao = new PlanetaDao()
const service = new Service(dao);
const controller = new Controller(service);

const getPayload = (event) => {
  let body
  if (typeof event.body === 'string') {
    body = JSON.parse(event.body);
  } else {
    body = event.body;
  }
  return {
    ...event.path,
    ...event.query,
    ...body
  }
}

export const crearPlaneta = async (event) => {
  const payload = getPayload(event);
  return controller.crearPlaneta(payload)
};


export const obtenerPlaneta = async (event) => {
  const payload = getPayload(event);
  return controller.obtenerPlaneta(payload)
};
