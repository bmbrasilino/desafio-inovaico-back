import {AppointmentRepository} from "../../repositories/AppointmentRepository";
import {CreateAppointmentController} from "../../controllers/appointment/CreateAppointmentController";
import {CreateAppointmentService} from "../../services/appointment/CreateAppointmentService";

export default (): CreateAppointmentController => {
  const appointmentRepository = new AppointmentRepository();
  const createAppointmentService = new CreateAppointmentService(appointmentRepository);
  return new CreateAppointmentController(createAppointmentService);
}
