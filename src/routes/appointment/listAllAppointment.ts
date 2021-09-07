import {AppointmentRepository} from "../../repositories/AppointmentRepository";
import {ListAllAppointmentService} from "../../services/appointment/ListAllAppointmentService";
import {ListAllAppointmentController} from "../../controllers/appointment/ListAllAppointmentController";

export default (): ListAllAppointmentController => {
  const appointmentRepository = new AppointmentRepository();
  const listAllAppointmentService = new ListAllAppointmentService(appointmentRepository);
  return new ListAllAppointmentController(listAllAppointmentService);
}
