import { Router } from "express";

import CreatePatientController from "./createPatient";
import ListAllPatientController from "./listAllPatient";
import FindByIdPatientController from "./findByIdPatient";
import UpdatePatientController from "./updatePatient";
import DeletePatientController from "./deletePatient";

const patientsRoutes = Router();

patientsRoutes.post("/", (request, response) => {
  return CreatePatientController().handle(request, response);
});

patientsRoutes.get("/", (request, response) => {
  return ListAllPatientController().handle(request, response);
});

patientsRoutes.get("/:id", (request, response) => {
  return FindByIdPatientController().handle(request, response);
});

patientsRoutes.put("/:id", (request, response) => {
  return UpdatePatientController().handle(request, response);
});

patientsRoutes.delete("/:id", (request, response) => {
  return DeletePatientController().handle(request, response);
});

export { patientsRoutes };
