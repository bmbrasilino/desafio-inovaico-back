import { Router } from "express";

import CreateAppointmentNotes from "./createAppointmentNotes";
import ListAllAppointmentNotesController from "./listAllAppointmentNotes";
import FindByIdAppointmentNotesController from "./findByIdAppointmentNotes";
import UpdateAppointmentNotesController from "./updateAppointmentNotes";
import DeleteAppointmentNotesControllerController from "./deleteAppointmentNotes";

const appointmentsNotesRoutes = Router();

appointmentsNotesRoutes.post("/", (request, response) => {
  return CreateAppointmentNotes().handle(request, response);
});

appointmentsNotesRoutes.get("/", (request, response) => {
  return ListAllAppointmentNotesController().handle(request, response);
});

appointmentsNotesRoutes.get("/:id", (request, response) => {
  return FindByIdAppointmentNotesController().handle(request, response);
});

appointmentsNotesRoutes.put("/:id", (request, response) => {
  return UpdateAppointmentNotesController().handle(request, response);
});

appointmentsNotesRoutes.delete("/:id", (request, response) => {
  return DeleteAppointmentNotesControllerController().handle(request, response);
});

export { appointmentsNotesRoutes };
