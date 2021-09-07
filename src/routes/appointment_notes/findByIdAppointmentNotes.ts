import {AppointmentNotesRepository} from "../../repositories/AppointmentNotesRepository";
import {FindByIdAppointmentNotesController} from "../../controllers/appointment_notes/FindByIdAppointmentNotesController";
import {FindByIdAppointmentNotesService} from "../../services/appointment_notes/FindByIdAppointmentNotesService";

export default (): FindByIdAppointmentNotesController => {
  const appointmentRepository = new AppointmentNotesRepository();
  const findByIdAppointmentService = new FindByIdAppointmentNotesService(appointmentRepository);
  return new FindByIdAppointmentNotesController(findByIdAppointmentService);
}
