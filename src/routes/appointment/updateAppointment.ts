import {AppointmentRepository} from "../../repositories/AppointmentRepository";
import {UpdateAppointmentService} from "../../services/appointment/UpdateAppointmentService";
import {UpdateAppointmentController} from "../../controllers/appointment/UpdateAppointmentController";

export default (): UpdateAppointmentController => {
  const appointmentRepository = new AppointmentRepository();
  const updateAppointmentService = new UpdateAppointmentService(appointmentRepository);
  return new UpdateAppointmentController(updateAppointmentService);
}
