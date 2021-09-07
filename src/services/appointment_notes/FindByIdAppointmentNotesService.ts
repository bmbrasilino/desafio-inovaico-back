import { AppointmentNotesRepository } from "../../repositories/AppointmentNotesRepository";
import { AppointmentNote } from "../../models/AppointmentNote";

interface IRequest {
  id: string;
}

class FindByIdAppointmentNotesService {
  constructor(private appointmentNoteRepository: AppointmentNotesRepository) {}
  
  async execute({id}: IRequest) : Promise<AppointmentNote | undefined> {
    return await this.appointmentNoteRepository.findById({id});
  }
}
export { FindByIdAppointmentNotesService };
