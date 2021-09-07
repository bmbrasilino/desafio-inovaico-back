import {PatientRepository} from "../../repositories/PatientRepository";
import {FindByIdPatientService} from "../../services/patient/FindByIdPatientService";
import {FindByIdPatientController} from "../../controllers/patient/FindByIdPatientController";

export default (): FindByIdPatientController => {
  const patientsRepository = new PatientRepository();
  const findByIdPatientService = new FindByIdPatientService(patientsRepository);
  return new FindByIdPatientController(findByIdPatientService);
}
