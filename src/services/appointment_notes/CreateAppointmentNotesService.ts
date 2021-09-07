import { AppointmentNotesRepository } from "../../repositories/AppointmentNotesRepository";

interface IRequest {
  patient_id: string;
  appointment_id: string;
  annotation: string;
}

class CreateAppointmentNotesService {
  constructor(private appointmentNotesRepository: AppointmentNotesRepository) {}

  async execute({ patient_id, appointment_id, annotation }:IRequest) : Promise<void> {
    await this.appointmentNotesRepository.create({ patient_id, appointment_id, annotation });
  }
}
export { CreateAppointmentNotesService };
