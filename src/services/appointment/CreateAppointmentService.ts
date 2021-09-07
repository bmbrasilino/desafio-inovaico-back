import { AppointmentRepository } from "../../repositories/AppointmentRepository";

interface IRequest {
  patient_id: string;
  consultation_date: Date;
}

class CreateAppointmentService {
  constructor(private appointmentRepository: AppointmentRepository) {}
  
  async execute({ patient_id, consultation_date }:IRequest) : Promise<void> {
    await this.appointmentRepository.create({ patient_id, consultation_date });
  }
}
export { CreateAppointmentService };
