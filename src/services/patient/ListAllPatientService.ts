import { PatientRepository} from "../../repositories/PatientRepository";
import {Patient} from "../../models/Patient";

class  ListAllPatientService {
  constructor(private patientsRepository: PatientRepository) {}
  
  async execute() : Promise<Patient[]> {
    return await this.patientsRepository.listAll();
  }
}
export { ListAllPatientService };
