import { AppointmentNotesRepository } from "../../repositories/AppointmentNotesRepository";

interface IRequest {
  id: string;
}

class DeleteAppointmentNotesService {
  constructor(private appointmentsNotesRepository: AppointmentNotesRepository) {}
  
  async execute({id}:IRequest) : Promise<void> {
    await this.appointmentsNotesRepository.delete({id});
  }
}
export { DeleteAppointmentNotesService };
