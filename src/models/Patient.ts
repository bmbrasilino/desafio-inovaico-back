import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import {Appointment} from "./Appointment";

@Entity("patients")
class Patient {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  
  @Column({ type: 'varchar', nullable: true })
  name: string | undefined;

  @Column({ type: 'varchar', nullable: true })
  phone: string | undefined;

  @Column({ type: 'varchar', nullable: true })
  email: string  | undefined;

  @Column({ type: 'varchar', nullable: true })
  birthday: string | undefined;

  @Column({ type: 'varchar', nullable: true })
  gender: string | undefined;

  @Column({ type: 'varchar', nullable: true })
  height: string  | undefined;

  @Column({ type: 'varchar', nullable: true })
  weight: string | undefined;
  
  @CreateDateColumn()
  created_at: Date | undefined;

  @OneToMany(() => Appointment, appointment => appointment.id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'patient_id' })
  appointment_id: Appointment[] | undefined;
}
 export {Patient};
