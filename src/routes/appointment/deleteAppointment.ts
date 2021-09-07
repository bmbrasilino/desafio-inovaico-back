import {AppointmentRepository} from "../../repositories/AppointmentRepository";
import {DeleteAppointmentController} from "../../controllers/appointment/DeleteAppointmentController";
import {DeleteAppointmentService} from "../../services/appointment/DeleteAppointmentService";

export default (): DeleteAppointmentController => {
  const appointmentRepository = new AppointmentRepository();
  const deleteAppointmentService = new DeleteAppointmentService(appointmentRepository);
  return new DeleteAppointmentController(deleteAppointmentService);
}
