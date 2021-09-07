
import {AppointmentNotesRepository} from "../../repositories/AppointmentNotesRepository";
import {UpdateAppointmentNotesController} from "../../controllers/appointment_notes/UpdateAppointmentNotesController";
import {UpdateAppointmentNotesService} from "../../services/appointment_notes/UpdateAppointmentNotesService";


export default (): UpdateAppointmentNotesController => {
  const appointmentNotesRepository = new AppointmentNotesRepository();
  const updateAppointmentNotesService = new UpdateAppointmentNotesService(appointmentNotesRepository);
  return new UpdateAppointmentNotesController(updateAppointmentNotesService);
}
