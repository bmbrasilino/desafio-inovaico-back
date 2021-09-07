import { AppointmentNote } from "../models/AppointmentNote";
import {CreateAppointmentNotesDTO} from "./DTO/appointment_notes/CreateAppointmentNotesDTO";
import {UpdateAppointmentNotesDTO} from "./DTO/appointment_notes/UpdateAppointmentNotesDTO";
import {FindByIdAppointmentNotesDTO} from "./DTO/appointment_notes/FindByIdAppointmentNotesDTO";


export interface AppointmentNotesInterface {
  listAll(): Promise<AppointmentNote[]>;
  findById({id: string}: FindByIdAppointmentNotesDTO): Promise<AppointmentNote>;
  create({ patient_id, appointment_id, annotation }: CreateAppointmentNotesDTO): Promise<void>;
  update({ patient_id, appointment_id, annotation }: UpdateAppointmentNotesDTO): Promise<void>;
}
