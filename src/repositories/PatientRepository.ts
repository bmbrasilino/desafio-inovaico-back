import { getRepository, Repository } from "typeorm";
import { Patient } from "../models/Patient";
import {CreatePatientDTO} from "../interfaces/DTO/patient/CreatePatientDTO";
import {UpdatePatientDTO} from "../interfaces/DTO/patient/UpdatePatientDTO";
import {DeletePatientDTO} from "../interfaces/DTO/patient/DeletePatientDTO";
import {FindByIdPatientDTO} from "../interfaces/DTO/patient/FindByIdPatientDTO";
import {PatientInterface} from "../interfaces/PatientInterface";

export class PatientRepository implements PatientInterface {
  private repository: Repository<Patient>;
  
  constructor() {
    this.repository = getRepository(Patient);
  }
  
  async create({name, phone, email, birthday, gender, height, weight}: CreatePatientDTO): Promise<void> {
    const patient = {
      name, phone, email, birthday, gender, height, weight
    }
    this.repository.create(patient);
    await this.repository.save(patient);
  } 
  
  async update({id, name, phone, email, birthday, gender, height, weight}: UpdatePatientDTO): Promise<void> {
    const patient = {
      name, phone, email, birthday, gender, height, weight
    }
    await this.repository.createQueryBuilder().update(Patient).set(patient).where("id = :id", { id }).execute();
  }

  async listAll(): Promise<Patient[]> {
    return await this.repository.find();
  }
  
  async findById({id}: FindByIdPatientDTO): Promise<Patient> {
    // @ts-ignore
    return await this.repository.findOne(id);
  }
  
  async delete({id}:DeletePatientDTO): Promise<void> {
    // @ts-ignore
    return await this.repository.delete(id);
  }
}
