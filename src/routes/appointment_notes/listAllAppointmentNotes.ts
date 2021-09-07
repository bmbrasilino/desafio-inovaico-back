import {AppointmentNotesRepository} from "../../repositories/AppointmentNotesRepository";
import {ListAllAppointmentNotesService} from "../../services/appointment_notes/ListAllAppointmentNotesService";
import {ListAllAppointmentNotesController} from "../../controllers/appointment_notes/ListAllAppointmentNotesController";

export default (): ListAllAppointmentNotesController => {
  const appointmentRepository = new AppointmentNotesRepository();
  const listAllAppointmentNotesService = new ListAllAppointmentNotesService(appointmentRepository);
  return new ListAllAppointmentNotesController(listAllAppointmentNotesService);
}
