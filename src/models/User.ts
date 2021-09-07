import { v4 as uuidV4 } from "uuid";
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import {Appointment} from "./Appointment";

@Entity("users")
class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', nullable: true })
  name: string | undefined;

  @Column({ type: 'varchar', nullable: true })
  email: string  | undefined;

  @Column({ type: 'varchar', nullable: true })
  password: string | undefined;

  @Column({ type: 'boolean', nullable: true })
  isAdmin: boolean | undefined;
  
  @CreateDateColumn()
  created_at: Date | undefined;
  
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export {User};
