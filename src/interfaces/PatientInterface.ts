import { Patient } from "../models/Patient";
import {CreatePatientDTO} from "./DTO/patient/CreatePatientDTO";
import {UpdatePatientDTO} from "./DTO/patient/UpdatePatientDTO";
import {FindByIdPatientDTO} from "./DTO/patient/FindByIdPatientDTO";


export interface PatientInterface {
  listAll(): Promise<Patient[]>;
  findById({id: string}: FindByIdPatientDTO): Promise<Patient>;
  create({ name, phone, email, birthday, gender, height, weight }: CreatePatientDTO): Promise<void>;
  update({ id, name, phone, email, birthday, gender, height, weight }: UpdatePatientDTO): Promise<void>;
}
