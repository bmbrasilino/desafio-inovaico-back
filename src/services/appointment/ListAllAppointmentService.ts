import { AppointmentRepository } from "../../repositories/AppointmentRepository";
import { Appointment } from "../../models/Appointment";

class ListAllAppointmentService {
  constructor(private appointmentRepository: AppointmentRepository) {}
  
  async execute() : Promise<Appointment[]> {
    return await this.appointmentRepository.listAll();
  }
}
export { ListAllAppointmentService };
