import {PatientRepository} from "../../repositories/PatientRepository";
import {UpdatePatientController} from "../../controllers/patient/UpdatePatientController";
import {UpdatePatientService} from "../../services/patient/UpdatePatientService";

export default (): UpdatePatientController => {
  const patientsRepository = new PatientRepository();
  const updatePatientService = new UpdatePatientService(patientsRepository);
  return new UpdatePatientController(updatePatientService);
}
