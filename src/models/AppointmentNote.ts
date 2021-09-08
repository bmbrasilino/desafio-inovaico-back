import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Patient } from "./Patient";
// @ts-ignore
import { Appointment } from "./Appointment";

@Entity("appointment_notes")
class AppointmentNote {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  
  @ManyToOne(() => Patient, patient => patient.id, {eager: true})
  @JoinColumn({ name: 'patient_id' })
  patient_id: Patient | undefined;

  @ManyToOne(() => Appointment, appointment => appointment.id, {eager: true})
  @JoinColumn({ name: 'appointment_id' })
  appointment_id: Appointment | undefined;
  
  @Column({ type: "varchar", nullable: true })
  annotation: string | undefined;
  
  @CreateDateColumn()
  created_at: Date | undefined;

}
export {AppointmentNote};
