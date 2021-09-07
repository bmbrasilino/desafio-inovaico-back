import { PatientRepository} from "../../repositories/PatientRepository";

interface IRequest {
  id: string;
}

class  DeletePatientService {
  constructor(private patientsRepository: PatientRepository) {}
  
  async execute({id}:IRequest) : Promise<void> {    
    await this.patientsRepository.delete({id});
  }
}
export { DeletePatientService };
