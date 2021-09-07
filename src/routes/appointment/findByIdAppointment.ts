import {AppointmentRepository} from "../../repositories/AppointmentRepository";
import {FindByIdAppointmentService} from "../../services/appointment/FindByIdAppointmentService";
import {FindByIdAppointmentController} from "../../controllers/appointment/FindByIdAppointmentController";

export default (): FindByIdAppointmentController => {
  const appointmentRepository = new AppointmentRepository();
  const findByIdAppointmentService = new FindByIdAppointmentService(appointmentRepository);
  return new FindByIdAppointmentController(findByIdAppointmentService);
}
