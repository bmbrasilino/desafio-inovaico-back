import { AppointmentNotesRepository } from "../../repositories/AppointmentNotesRepository";

interface IRequest {
  id: string;
  patient_id: string;
  appointment_id: string;
  annotation: string;
}

class UpdateAppointmentNotesService {
  constructor(private appointmentNotesRepository: AppointmentNotesRepository) {}
  
  async execute({id, patient_id, appointment_id, annotation }:IRequest) : Promise<void> {
    await this.appointmentNotesRepository.update({ id, patient_id, appointment_id, annotation });
  }
}
export { UpdateAppointmentNotesService };
