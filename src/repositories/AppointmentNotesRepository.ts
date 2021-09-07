import { getRepository, Repository } from "typeorm";
import { AppointmentNote } from "../models/AppointmentNote";
import { CreateAppointmentNotesDTO } from "../interfaces/DTO/appointment_notes/CreateAppointmentNotesDTO";
import { UpdateAppointmentNotesDTO } from "../interfaces/DTO/appointment_notes/UpdateAppointmentNotesDTO";
import { DeleteAppointmentNotesDTO } from "../interfaces/DTO/appointment_notes/DeleteAppointmentNotesDTO";
import { FindByIdAppointmentNotesDTO } from "../interfaces/DTO/appointment_notes/FindByIdAppointmentNotesDTO";
import { AppointmentNotesInterface } from "../interfaces/AppointmentNotesInterface";

export class AppointmentNotesRepository implements AppointmentNotesInterface {
  private repository: Repository<AppointmentNote>;
  
  constructor() {
    this.repository = getRepository(AppointmentNote);
  }
  
  async create({ patient_id, appointment_id, annotation }: CreateAppointmentNotesDTO): Promise<void> {
    const appointmentNotes = { patient_id, appointment_id, annotation };
    // @ts-ignore
    this.repository.create(appointmentNotes);
    // @ts-ignore
    await this.repository.save(appointmentNotes);
  } 
  
  async update({id, patient_id, appointment_id, annotation }: UpdateAppointmentNotesDTO): Promise<void> {
    const appointmentNotes = { patient_id, appointment_id, annotation };
    // @ts-ignore
    await this.repository.createQueryBuilder().update(AppointmentNote).set(appointmentNotes).where("id = :id", { id }).execute();
  }

  async listAll(): Promise<AppointmentNote[]> {
    return await this.repository.find();
  }

  async findById({id}: FindByIdAppointmentNotesDTO): Promise<AppointmentNote> {
    // @ts-ignore
    return await this.repository.findOne(id);
  }
  
  async delete({id}:DeleteAppointmentNotesDTO): Promise<void> {
    // @ts-ignore
    return await this.repository.delete(id);
  }
}
