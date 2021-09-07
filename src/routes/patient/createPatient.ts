import {PatientRepository} from "../../repositories/PatientRepository";
import {CreatePatientController} from "../../controllers/patient/CreatePatientController";
import {CreatePatientService} from "../../services/patient/CreatePatientService";

export default (): CreatePatientController => {
  const patientsRepository = new PatientRepository();
  const createPatientService = new CreatePatientService(patientsRepository);
  return new CreatePatientController(createPatientService);
}
