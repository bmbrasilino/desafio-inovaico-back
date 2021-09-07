import { PatientRepository} from "../../repositories/PatientRepository";
import { Patient } from "../../models/Patient";

interface IRequest {
  id: string;
}

class  FindByIdPatientService {
  constructor(private patientsRepository: PatientRepository) {}
  
  async execute({id}: IRequest) : Promise<Patient | undefined> {
    return await this.patientsRepository.findById({id});
  }
}
export { FindByIdPatientService };
