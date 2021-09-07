import { PatientRepository} from "../../repositories/PatientRepository";

interface IRequest {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  height: string;
  weight: string;
}

class  CreatePatientService {
  constructor(private patientsRepository: PatientRepository) {}
  
  async execute({name, phone, email, birthday, gender, height, weight}:IRequest) : Promise<void> {
   await this.patientsRepository.create({name, phone, email, birthday, gender, height, weight});
  }
}
export { CreatePatientService };
