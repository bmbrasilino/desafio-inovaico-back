import { Appointment } from "../models/Appointment";
import {CreateAppointmentDTO} from "./DTO/appointment/CreateAppointmentDTO";
import {UpdateAppointmentDTO} from "./DTO/appointment/UpdateAppointmentDTO";
import {FindByIdAppointmentDTO} from "./DTO/appointment/FindByIdAppointmentDTO";


export interface AppointmentInterface {
  listAll(): Promise<Appointment[]>;
  findById({id: string}: FindByIdAppointmentDTO): Promise<Appointment>;
  create({ patient_id, consultation_date }: CreateAppointmentDTO): Promise<void>;
  update({ id, patient_id, consultation_date }: UpdateAppointmentDTO): Promise<void>;
}
