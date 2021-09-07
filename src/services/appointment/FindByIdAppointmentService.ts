import { AppointmentRepository } from "../../repositories/AppointmentRepository";
import { Appointment } from "../../models/Appointment";

interface IRequest {
  id: string;
}

class FindByIdAppointmentService {
  constructor(private appointmentRepository: AppointmentRepository) {}
  
  async execute({id}: IRequest) : Promise<Appointment | undefined> {
    return await this.appointmentRepository.findById({id});
  }
}
export { FindByIdAppointmentService };
