import {PatientRepository} from "../../repositories/PatientRepository";
import {DeletePatientController} from "../../controllers/patient/DeletePatientController";
import {DeletePatientService} from "../../services/patient/DeletePatientService";

export default (): DeletePatientController => {
  const patientsRepository = new PatientRepository();
  const deletePatientService = new DeletePatientService(patientsRepository);
  return new DeletePatientController(deletePatientService);
}
