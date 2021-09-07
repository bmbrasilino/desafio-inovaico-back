import { AppointmentRepository} from "../../repositories/AppointmentRepository";

interface IRequest {
  id: string;
}

class DeleteAppointmentService {
  constructor(private appointmentsRepository: AppointmentRepository) {}
  
  async execute({id}:IRequest) : Promise<void> {
    await this.appointmentsRepository.delete({id});
  }
}
export { DeleteAppointmentService };
