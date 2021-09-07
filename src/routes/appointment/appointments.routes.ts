import { Router } from "express";

import CreateAppointment from "./createAppointment";
import ListAllAppointmentController from "./listAllAppointment";
import FindByIdAppointmentController from "./findByIdAppointment";
import UpdateAppointmentController from "./updateAppointment";
import DeleteAppointmentControllerController from "./deleteAppointment";

const appointmentsRoutes = Router();

appointmentsRoutes.post("/", (request, response) => {
  return CreateAppointment().handle(request, response);
});

appointmentsRoutes.get("/", (request, response) => {
  return ListAllAppointmentController().handle(request, response);
});

appointmentsRoutes.get("/:id", (request, response) => {
  return FindByIdAppointmentController().handle(request, response);
});

appointmentsRoutes.put("/:id", (request, response) => {
  return UpdateAppointmentController().handle(request, response);
});

appointmentsRoutes.delete("/:id", (request, response) => {
  return DeleteAppointmentControllerController().handle(request, response);
});

export { appointmentsRoutes };
