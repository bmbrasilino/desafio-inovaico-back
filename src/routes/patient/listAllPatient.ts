import {PatientRepository} from "../../repositories/PatientRepository";
import {ListAllPatientService} from "../../services/patient/ListAllPatientService";
import {ListAllPatientController} from "../../controllers/patient/ListAllPatientController";

export default (): ListAllPatientController => {
  const patientsRepository = new PatientRepository();
  const listAllPatientService = new ListAllPatientService(patientsRepository);
  return new ListAllPatientController(listAllPatientService);
}
