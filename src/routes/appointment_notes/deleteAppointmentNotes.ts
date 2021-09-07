import {AppointmentNotesRepository} from "../../repositories/AppointmentNotesRepository";
import {DeleteAppointmentNotesController} from "../../controllers/appointment_notes/DeleteAppointmentNotesController";
import {DeleteAppointmentNotesService} from "../../services/appointment_notes/DeleteAppointmentNotesService";

export default (): DeleteAppointmentNotesController => {
  const appointmentNotesRepository = new AppointmentNotesRepository();
  const createAppointmentService = new DeleteAppointmentNotesService(appointmentNotesRepository);
  return new DeleteAppointmentNotesController(createAppointmentService);
}
