import { getRepository, Repository } from "typeorm";
import { Appointment } from "../models/Appointment";
import { CreateAppointmentDTO } from "../interfaces/DTO/appointment/CreateAppointmentDTO";
import {UpdateAppointmentDTO} from "../interfaces/DTO/appointment/UpdateAppointmentDTO";
import {DeleteAppointmentDTO} from "../interfaces/DTO/appointment/DeleteAppointmentDTO";
import {FindByIdAppointmentDTO} from "../interfaces/DTO/appointment/FindByIdAppointmentDTO";
import {AppointmentInterface} from "../interfaces/AppointmentInterface";

export class AppointmentRepository implements AppointmentInterface {
  private repository: Repository<Appointment>;
  
  constructor() {
    this.repository = getRepository(Appointment);
  }
  
  async create({ patient_id, consultation_date }: CreateAppointmentDTO): Promise<void> {
    const appointment = { patient_id, consultation_date };
    // @ts-ignore
    this.repository.create(appointment);
    // @ts-ignore
    await this.repository.save(appointment);
  } 
  
  async update({id, patient_id, consultation_date }: UpdateAppointmentDTO): Promise<void> {
    const appointment = { patient_id, consultation_date };
    // @ts-ignore
    await this.repository.createQueryBuilder().update(Appointment).set(appointment).where("id = :id", { id }).execute();
  }

  async listAll(): Promise<Appointment[]> {
    return await this.repository.find();
  }

  async findById({id}: FindByIdAppointmentDTO): Promise<Appointment> {
    // @ts-ignore
    return await this.repository.findOne({id});
  }
  
  async delete({id}:DeleteAppointmentDTO): Promise<void> {
    // @ts-ignore
    return await this.repository.delete({id});
  }
}
