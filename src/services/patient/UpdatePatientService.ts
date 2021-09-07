import { PatientRepository} from "../../repositories/PatientRepository";

interface IRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  height: string;
  weight: string;
}

class  UpdatePatientService {
  constructor(private patientsRepository: PatientRepository) {}
  
  async execute({id, name, phone, email, birthday, gender, height, weight}:IRequest) : Promise<void> {
    await this.patientsRepository.update({id, name, phone, email, birthday, gender, height, weight});
  }
}
export { UpdatePatientService };
