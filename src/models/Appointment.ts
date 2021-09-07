import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Patient } from "./Patient";

@Entity("appointments")
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  
  @ManyToOne(() => Patient, patient => patient.id, {eager: true})
  @JoinColumn({ name: 'patient_id' })
  patient_id: Patient | undefined;
  
  @Column({ type: Date, nullable: true })
  consultation_date: Date | undefined;
  
  @CreateDateColumn()
  created_at: Date | undefined;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export {Appointment};
