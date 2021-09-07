import {AppointmentNotesRepository} from "../../repositories/AppointmentNotesRepository";
import {CreateAppointmentNotesController} from "../../controllers/appointment_notes/CreateAppointmentNotesController";
import {CreateAppointmentNotesService} from "../../services/appointment_notes/CreateAppointmentNotesService";

export default (): CreateAppointmentNotesController => {
  const appointmentNotesRepository = new AppointmentNotesRepository();
  const createAppointmentService = new CreateAppointmentNotesService(appointmentNotesRepository);
  return new CreateAppointmentNotesController(createAppointmentService);
}
