import { AppointmentRepository} from "../../repositories/AppointmentRepository";

interface IRequest {
  id: string;
  patient_id: string;
  consultation_date: Date;
}

class UpdateAppointmentService {
  constructor(private appointmentRepository: AppointmentRepository) {}
  
  async execute({id, patient_id, consultation_date }:IRequest) : Promise<void> {
    await this.appointmentRepository.update({ id, patient_id, consultation_date });
  }
}
export { UpdateAppointmentService };
