import { AppointmentNotesRepository } from "../../repositories/AppointmentNotesRepository";
import { AppointmentNote } from "../../models/AppointmentNote";

class ListAllAppointmentNotesService {
  constructor(private appointmentNotesRepository: AppointmentNotesRepository) {}
  
  async execute() : Promise<AppointmentNote[]> {
    return await this.appointmentNotesRepository.listAll();
  }
}
export { ListAllAppointmentNotesService };
